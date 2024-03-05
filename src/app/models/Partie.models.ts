import {Board} from "./Board.models";

export class Partie {
    private history: Board[];
    private _current: number;
    private caracteres: string[];


    constructor() {
        this.history = [new Board()];
        this._current = 0;
        this.caracteres = ['X', 'O'];
    }

    get board(): Board {
        return this.history[this._current];
    }

    get existeGagnant(): boolean {
        return this.board.existeGagnant;
    }

    public isWinningSquare(x: number, y: number): boolean {
        return this.board.isWinningSquare(x, y);
    }

    public getPion(x: number, y: number): string {
        return this.board.getPion(x, y);
    }

    public isWin(pion: string): boolean {
        return this.board.isWin(pion);
    }

    public isFull(): boolean {
        return this.board.isFull();
    }

    public setPion(x: number, y: number, pion: string): void {
        const historyCopy = this.history.slice(0, this._current + 1);
        const newBoard = historyCopy[historyCopy.length - 1].clone();

        newBoard.setPion(x, y, pion);

        historyCopy.push(newBoard);

        this._current++;
        this.history = historyCopy;
    }

    public get historique(): Board[] {
        return this.history;
    }

    public setCurrent(index: number): void {
        this._current = index;
    }

    get nbTour(): number {
        return this._current;
    }

    get currentCaratere(): string {
        return (this._current % 2 === 0) ? 'X' : 'O';
    }

    public get carateres(): string[] {
        return this.caracteres;
    }

    public get current() {
        return this._current;
    }

}
