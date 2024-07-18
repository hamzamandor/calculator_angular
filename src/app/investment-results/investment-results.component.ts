import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CommonModule], // Importer CommonModule pour utiliser *ngIf, *ngFor et le pipe currency
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})
export class InvestmentResultsComponent {
  @Input() results: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined;

  // Ajout de la méthode trackByYear
  trackByYear(index: number, result: { year: number }): number {
    return result.year;
  }
}
