import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q54-nested-child',
  templateUrl: './q54-nested-child.component.html',
  styleUrls: ['./q54-nested-child.component.css']
})
export class Q54NestedChildComponent {}

