import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CaseComponent} from "../case/case.component";
import {Board} from "../models/Board.models";
import {NgForOf} from "@angular/common";
import {Partie} from "../models/Partie.models";

@Component({
  selector: 'board',
  standalone: true,
    imports: [
        CaseComponent,
        NgForOf
    ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent{

    @Input() partie!: Partie;

    @Output() updateMessage: EventEmitter<string> = new EventEmitter<string>();


    onClick(x: number, y: number) {
        if (this.partie.getPion(x, y) === '' && !this.partie.isFull() && !this.partie.existeGagnant) {
            this.partie.setPion(x, y, this.partie.carateres[this.partie.nbTour % 2]);

            this.envoyerMessage();
        }
    }

    private envoyerMessage() {
        if (this.partie.isWin(this.partie.carateres[(this.partie.nbTour % 2) - 1])) {
            this.updateMessage.emit('Le joueur ' + this.partie.currentCaratere + ' a gagné');
        } else if (this.partie.isFull()) {
            this.updateMessage.emit('Match nul');
        } else {
            this.updateMessage.emit('Au tour du joueur ' + this.partie.currentCaratere + ' de jouer');
        }
    }

}
