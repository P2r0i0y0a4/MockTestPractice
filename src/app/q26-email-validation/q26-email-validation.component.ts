import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q26-email-validation',
  templateUrl: './q26-email-validation.component.html',
  styleUrls: ['./q26-email-validation.component.css']
})
export class Q26EmailValidationComponent {
  email = '';
  
}

