import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BoardComponent} from "./board/board.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, BoardComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
    title = 'Tic Tac Toe';
    msgIndication!: string;

    ngOnInit(): void {
    }


    updateMessageIndication(nouveauMessage: string) {
        this.msgIndication = nouveauMessage;
    }
}
