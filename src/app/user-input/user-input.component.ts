import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'] // Correction: styleUrls instead of styleUrl
})
export class UserInputComponent {
 
  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '10';
  enteredDuration: string = '10';

  constructor( private investmentService : InvestmentService){}
  
  onSubmit() {
    this.investmentService.onCalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment,
    });


    this.enteredInitialInvestment = '0';
    this.enteredAnnualInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
