import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q56-date-pipe',
  templateUrl: './q56-date-pipe.component.html',
  styleUrls: ['./q56-date-pipe.component.css']
})
export class Q56DatePipeComponent {
  today = new Date();
}

