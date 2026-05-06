import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q30-capture-all-inputs',
  templateUrl: './q30-capture-all-inputs.component.html',
  styleUrls: ['./q30-capture-all-inputs.component.css']
})
export class Q30CaptureAllInputsComponent {
  values: any = {};
  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    city: ['']
  });

  constructor(private fb: FormBuilder) {}
  
}

