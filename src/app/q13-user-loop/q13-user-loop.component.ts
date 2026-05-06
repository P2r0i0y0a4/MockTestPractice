import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q13-user-loop',
  templateUrl: './q13-user-loop.component.html',
  styleUrls: ['./q13-user-loop.component.css']
})
export class Q13UserLoopComponent {
  users = [
    { name: 'Asha', email: 'asha@example.com' },
    { name: 'Ravi', email: 'ravi@example.com' }
  ];
}

