import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'case',
  standalone: true,
    imports: [
        NgClass
    ],
  templateUrl: './case.component.html',
  styleUrl: './case.component.css'
})

export class CaseComponent {

    @Input() caratere!: string;
    @Input() isWinning!: boolean;
    @Input() isNul!: boolean;

}
