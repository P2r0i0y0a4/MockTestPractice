import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q08-output-event',
  templateUrl: './q08-output-event.component.html',
  styleUrls: ['./q08-output-event.component.css']
})
export class Q08OutputEventComponent {
  childMessage = '';

  receiveMessage(value: string): void {
    this.childMessage = value;
  }
}

