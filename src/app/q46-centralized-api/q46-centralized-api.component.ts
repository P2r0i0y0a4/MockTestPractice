import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q46-centralized-api',
  templateUrl: './q46-centralized-api.component.html',
  styleUrls: ['./q46-centralized-api.component.css']
})
export class Q46CentralizedApiComponent {
  count = 0;

  constructor(private dataService: PracticeDataService) {}

  load(): void {
    this.dataService.getStaticUsers().subscribe((users) => this.count = users.length);
  }
}

