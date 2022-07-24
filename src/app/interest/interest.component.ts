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
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  @Input() interest: number;

  constructor() { }

  ngOnInit(): void {
  }

}
