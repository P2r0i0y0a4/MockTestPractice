import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q44-error-handling',
  templateUrl: './q44-error-handling.component.html',
  styleUrls: ['./q44-error-handling.component.css']
})
export class Q44ErrorHandlingComponent {
  error = '';

  constructor(private dataService: PracticeDataService) {}

  load(): void {
    this.error = '';
    this.dataService.getUsersFromApi().pipe(
      catchError(() => {
        this.error = 'Something went wrong while loading users.';
        return of([]);
      })
    ).subscribe();
  }
}

