import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BoardComponent} from "./board/board.component";
import {NgForOf, NgIf} from "@angular/common";
import {Partie} from "./models/Partie.models";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BoardComponent, NgForOf, NgIf],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'Tic Tac Toe';
    msgIndication!: string;
    protected partie!: Partie;

    ngOnInit(): void {
        this.partie = new Partie();
        this.updateMessageIndication('Au tour du joueur ' + this.partie.currentCaratere + ' de jouer');
    }


    updateMessageIndication(nouveauMessage: string) {
        this.msgIndication = nouveauMessage;
    }
}
