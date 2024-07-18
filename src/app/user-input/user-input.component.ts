import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type {  InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css'] // Correction: styleUrls instead of styleUrl
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InvestmentInput>();

  enteredInitialInvestment: string = '0';
  enteredAnnualInvestment: string = '0';
  enteredExpectedReturn: string = '10';
  enteredDuration: string = '10';

  onSubmit() {
    this.calculate.emit({
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
