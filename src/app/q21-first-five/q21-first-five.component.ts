import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q21-first-five',
  templateUrl: './q21-first-five.component.html',
  styleUrls: ['./q21-first-five.component.css']
})
export class Q21FirstFiveComponent {
  items = ['Angular', 'Forms', 'Routing', 'Services', 'Pipes', 'HTTP', 'RxJS'];
}

