import { Injectable } from "@angular/core";
import type { InvestmentInput } from "./investment-input.model";

   
   @Injectable({providedIn:'root'})
   export class InvestmentService{
resultsData ?: {
   year: number;
   interest: number;
   valueEndOfYear: number; // Uniformiser les noms des propriétés
   annualInvestment: number; // Uniformiser les noms des propriétés
   totalInterest: number;
   totalAmountInvested: number;
 }[];
      onCalculateInvestmentResults(data: InvestmentInput) {
         const { initialInvestment, annualInvestment, expectedReturn, duration } = data;
         const annualData = [];
         let investmentValue = initialInvestment;
     
         for (let i = 0; i < duration; i++) {
           const year = i + 1;
           const interestEarnedInYear = investmentValue * (expectedReturn / 100);
           investmentValue += interestEarnedInYear + annualInvestment;
           const totalInterest =
             investmentValue - (annualInvestment * year) - initialInvestment;
     
           annualData.push({
             year: year,
             interest: interestEarnedInYear,
             valueEndOfYear: investmentValue, // Uniformiser les noms des propriétés
             annualInvestment: annualInvestment, // Uniformiser les noms des propriétés
             totalInterest: totalInterest,
             totalAmountInvested: initialInvestment + annualInvestment * year,
           });
         }
         this.resultsData=annualData;
         // this.resultsData.set(annualData);
       }

   }