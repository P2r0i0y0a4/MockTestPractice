import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q31-conditional-required',
  templateUrl: './q31-conditional-required.component.html',
  styleUrls: ['./q31-conditional-required.component.css']
})
export class Q31ConditionalRequiredComponent implements OnInit {
  form = this.fb.group({
    hasCompany: [false],
    companyName: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.get('hasCompany')?.valueChanges.subscribe((checked) => {
      const companyName = this.form.get('companyName');
      checked ? companyName?.setValidators([Validators.required]) : companyName?.clearValidators();
      companyName?.updateValueAndValidity();
    });
  }

  get f(){
    return this.form.controls;
  }
}

