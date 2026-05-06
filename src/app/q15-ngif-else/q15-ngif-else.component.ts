import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q15-ngif-else',
  templateUrl: './q15-ngif-else.component.html',
  styleUrls: ['./q15-ngif-else.component.css']
})
export class Q15NgIfElseComponent {
  isLoggedIn = true;
}

