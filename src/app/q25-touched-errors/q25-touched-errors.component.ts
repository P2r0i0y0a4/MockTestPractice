import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q25-touched-errors',
  templateUrl: './q25-touched-errors.component.html',
  styleUrls: ['./q25-touched-errors.component.css']
})
export class Q25TouchedErrorsComponent {
  name = '';
}

