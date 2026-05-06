import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q45-update-data',
  templateUrl: './q45-update-data.component.html',
  styleUrls: ['./q45-update-data.component.css']
})
export class Q45UpdateDataComponent implements OnInit {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.users$.subscribe((users) => this.users = users);
  }

  rename(): void {
    const first = this.users[0];
    if (first) {
      this.dataService.updateLocalUser({ ...first, name: 'Fresh Updated Name' });
    }
  }
}

