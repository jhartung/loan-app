/*
============================================
; Title: Assignment 9.2 - Capstone
; Author: Professor Krasso
; Date: 24 July 2022
; Modified By: Joel Hartung
; Title: Assignment 9.2 - Capstone
;===========================================
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-monthly-payment',
  templateUrl: './monthly-payment.component.html',
  styleUrls: ['./monthly-payment.component.css']
})
export class MonthlyPaymentComponent implements OnInit {

  @Input() monthlyPayment: number;

  constructor() { }

  ngOnInit(): void {
  }

}
