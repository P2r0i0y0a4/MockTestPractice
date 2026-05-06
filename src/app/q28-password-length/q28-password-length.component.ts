import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q28-password-length',
  templateUrl: './q28-password-length.component.html',
  styleUrls: ['./q28-password-length.component.css']
})
export class Q28PasswordLengthComponent {
  form = this.fb.group({
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) {}
}

