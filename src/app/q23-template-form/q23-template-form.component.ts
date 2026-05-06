import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q23-template-form',
  templateUrl: './q23-template-form.component.html',
  styleUrls: ['./q23-template-form.component.css']
})
export class Q23TemplateFormComponent {
  user = { name: '', email: '' };
}

