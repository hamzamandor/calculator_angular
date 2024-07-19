import { Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe], // Importer CommonModule pour utiliser *ngIf, *ngFor et le pipe currency
  templateUrl: './investment-results.component.html',
  styleUrls: ['./investment-results.component.css']
})
export class InvestmentResultsComponent {
  
  
  private investmentService = inject(InvestmentService);
get results(){
  return this.investmentService.resultsData;
}
}
