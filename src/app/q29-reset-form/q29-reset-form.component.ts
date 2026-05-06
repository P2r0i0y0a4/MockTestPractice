import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q29-reset-form',
  templateUrl: './q29-reset-form.component.html',
  styleUrls: ['./q29-reset-form.component.css']
})
export class Q29ResetFormComponent {
  form = this.fb.group({ title: [''] });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    this.form.reset();
  }
}

