import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q47-loading-state',
  templateUrl: './q47-loading-state.component.html',
  styleUrls: ['./q47-loading-state.component.css']
})
export class Q47LoadingStateComponent {
  loading = false;
  loaded = false;

  constructor(private dataService: PracticeDataService) {}

  load(): void {
    this.loading = true;
    this.loaded = false;
    this.dataService.getStaticUsers().pipe(
      finalize(() => this.loading = false)
    ).subscribe(() => this.loaded = true);
  }
}

