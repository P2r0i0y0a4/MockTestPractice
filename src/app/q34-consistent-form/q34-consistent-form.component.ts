import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q34-consistent-form',
  templateUrl: './q34-consistent-form.component.html',
  styleUrls: ['./q34-consistent-form.component.css']
})
export class Q34ConsistentFormComponent {
  form = this.fb.group({ name: [''] });

  constructor(private fb: FormBuilder) {}
}

