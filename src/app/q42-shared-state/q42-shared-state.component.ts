import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q42-shared-state',
  templateUrl: './q42-shared-state.component.html',
  styleUrls: ['./q42-shared-state.component.css']
})
export class Q42SharedStateComponent implements OnInit {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.users$.subscribe((users) => this.users = users);
  }

  update(): void {
    const first = this.users[0];
    if (first) {
      this.dataService.updateLocalUser({ ...first, name: `${first.name} Updated` });
    }
  }
}

