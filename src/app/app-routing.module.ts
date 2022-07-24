/*
============================================
; Title: Assignment 9.2 - Capstone
; Author: Professor Krasso
; Date: 24 July 2022
; Modified By: Joel Hartung
; Title: Assignment 9.2 - Capstone
;===========================================
*/

// import statements
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';

// routes
const routes: Routes = [
  {
    path: '',
    component: LoanCalculatorComponent
  },
  {
    path: 'loan-calculator',
    component: LoanCalculatorComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
