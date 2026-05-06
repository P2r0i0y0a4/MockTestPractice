import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q11-dynamic-class',
  templateUrl: './q11-dynamic-class.component.html',
  styleUrls: ['./q11-dynamic-class.component.css']
})
export class Q11DynamicClassComponent {
  marks = 0;
}

