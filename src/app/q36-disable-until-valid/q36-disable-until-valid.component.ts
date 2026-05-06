import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q36-disable-until-valid',
  templateUrl: './q36-disable-until-valid.component.html',
  styleUrls: ['./q36-disable-until-valid.component.css']
})
export class Q36DisableUntilValidComponent {
  form = this.fb.group({ name: ['', Validators.required] });

  constructor(private fb: FormBuilder) {}
}

