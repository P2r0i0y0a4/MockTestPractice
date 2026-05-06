import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q57-uppercase-pipe',
  templateUrl: './q57-uppercase-pipe.component.html',
  styleUrls: ['./q57-uppercase-pipe.component.css']
})
export class Q57UppercasePipeComponent {
  names = ['asha', 'ravi', 'mina'];
}

