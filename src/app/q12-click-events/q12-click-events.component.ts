import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q12-click-events',
  templateUrl: './q12-click-events.component.html',
  styleUrls: ['./q12-click-events.component.css']
})
export class Q12ClickEventsComponent {
  message = 'No button clicked';

  add(): void { this.message = 'Add clicked'; }
  remove(): void { this.message = 'Remove clicked'; }
  clear(): void { this.message = 'Clear clicked'; }
}

