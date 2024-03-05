import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

@Component({
  selector: 'case',
  standalone: true,
    imports: [
        NgClass
    ],
  template: `
      <div class="case-root">
          <div
              class="caractere"
              [ngClass]="{gagnant : isWinning, matchNul : isNul}"
          >{{ caratere }}</div>
      </div>
  `,
  styleUrl: './case.component.css'
})

export class CaseComponent {

    // On ajoute un point d'exclamation pour dire que la valeur est initialisée dans le parent
    @Input() caratere!: string;
    @Input() isWinning!: boolean;
    @Input() isNul!: boolean;

}

