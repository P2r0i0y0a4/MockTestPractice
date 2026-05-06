import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q37-api-service',
  templateUrl: './q37-api-service.component.html',
  styleUrls: ['./q37-api-service.component.css']
})
export class Q37ApiServiceComponent {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  load(): void {
    this.dataService.getStaticUsers().subscribe((users) => this.users = users);
  }
}

