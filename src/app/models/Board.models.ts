export class Board {

    private readonly board: string[][];
    private _existeGagnant: boolean;
    private _estPlein: boolean;
    private winningSqaure: number[] = [];

    constructor() {
        this.board = [['', '', ''], ['', '', ''], ['', '', '']];
        this._existeGagnant = false;
        this._estPlein = false;
    }

    public getBoard(): string[][] {
        return this.board;
    }

    public setPion(x: number, y: number, pion: string): void {
        this.board[x][y] = pion;
    }

    public isFull(): boolean {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] === '') {
                    this._estPlein = false;
                    return false;
                }
            }
        }
        this._estPlein = true;
        return true;
    }

    public isWin(pion: string): boolean {
        for (let i = 0; i < 3; i++) {
            if (this.board[i][0] === pion && this.board[i][1] === pion && this.board[i][2] === pion) {
                this.winningSqaure = [i*3, i*3+1, i*3+2];
                this._existeGagnant = true;
                return true;
            }
            if (this.board[0][i] === pion && this.board[1][i] === pion && this.board[2][i] === pion) {
                this.winningSqaure = [i, i+3, i+6];
                this._existeGagnant = true;
                return true;
            }
        }
        if (this.board[0][0] === pion && this.board[1][1] === pion && this.board[2][2] === pion) {
            this.winningSqaure = [0, 4, 8];
            this._existeGagnant = true;
            return true;
        }
        if (this.board[0][2] === pion && this.board[1][1] === pion && this.board[2][0] === pion) {
            this.winningSqaure = [2, 4, 6];
            this._existeGagnant = true;
            return true;
        }
        this._existeGagnant = false;
        return false;
    }

    public getPion(x: number, y: number): string {
        return this.board[x][y];
    }

    get existeGagnant(): boolean {
        return this._existeGagnant;
    }

    public isWinningSquare(x: number, y:number): boolean {
        return this.winningSqaure.includes(x*3+y);
    }

    clone() {
        const newBoard = new Board();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                newBoard.setPion(i, j, this.board[i][j]);
            }
        }
        return newBoard;
    }
}
