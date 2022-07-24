
/*============================================
; Title: Assignment 9.2 - Capstone
; Author: Professor Krasso
; Date: 24 July 2022
; Modified By: Joel Hartung
; Title: Assignment 9.2 - Capstone
;===========================================
*/

// import statements
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})


export class LoanCalculatorComponent implements OnInit {
  // defined variables
  loanForm: FormGroup;
  monthlyPayment: number = 0;
  interest: number = 0;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.loanForm = this.fb.group({
      loanAmount: [''],
      interestRate: [''],
      numOfYears: ['']
  })
}
  // function that calculates the loan terms
  calculateLoan() {
    const formValues = this.loanForm.value;
    const loanAmount = parseFloat(formValues.loanAmount);
    const interestRate = parseFloat(formValues.interestRate);
    const numOfYears = parseFloat(formValues.numOfYears);

    const numOfMonths = (numOfYears * 12);
    const ratePerPeriod = ((interestRate / 100) / 12);

    this.monthlyPayment = (loanAmount * (ratePerPeriod * Math.pow((ratePerPeriod + 1), numOfMonths))) / (Math.pow((1 + ratePerPeriod), numOfMonths) - 1);
    this.interest = (this.monthlyPayment * numOfMonths) - loanAmount;
    }

  // Function to clear entries
  clearEntries() {
    this.monthlyPayment = 0;
    this.interest = 0;
    this.loanForm.reset();
  }

  get form() {
    return this.loanForm.controls;
  }
}
