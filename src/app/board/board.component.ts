import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CaseComponent} from "../case/case.component";
import {Board} from "../models/Board.models";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'board',
  standalone: true,
    imports: [
        CaseComponent,
        NgForOf
    ],
  template: `
      <div class="ligne" *ngFor="let ligne of [0, 1, 2]">
          <case *ngFor="let colonne of [0, 1, 2]" [caratere]="board.getPion(ligne, colonne)" [isWinning]="board.isWinningSquare(ligne, colonne)" (click)="onCLick(ligne, colonne)"></case>
      </div>
  `,
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit{
    board!: Board;
    nbTour!: number;
    caractere!: string[];

    @Output() updateMessage: EventEmitter<string> = new EventEmitter<string>();

    ngOnInit(): void {
        this.board = new Board();
        this.nbTour = 0;
        this.caractere = ['X', 'O'];
    }


    onCLick(x: number, y: number) {
        if (this.board.getPion(x, y) === '' && !this.board.estPlein && !this.board.existeGagnant) {
            this.board.setPion(x, y, this.caractere[this.nbTour % 2]);
            this.nbTour++;

            this.envoyerMessage();
        }
    }

    private envoyerMessage() {
        if (this.board.isWin(this.caractere[(this.nbTour - 1) % 2])) {
            this.updateMessage.emit('Le joueur ' + this.caractere[(this.nbTour - 1) % 2] + ' a gagné');
        } else if (this.board.isFull()) {
            this.updateMessage.emit('Match nul');
        } else {
            this.updateMessage.emit('Au tour du joueur ' + this.caractere[this.nbTour % 2] + ' de jouer');
        }
    }
}
