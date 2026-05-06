import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q24-template-validation',
  templateUrl: './q24-template-validation.component.html',
  styleUrls: ['./q24-template-validation.component.css']
})
export class Q24TemplateValidationComponent {
  name = '';
  submitted = false;
  
}

