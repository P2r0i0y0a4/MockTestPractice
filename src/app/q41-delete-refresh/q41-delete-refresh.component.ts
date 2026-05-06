import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q41-delete-refresh',
  templateUrl: './q41-delete-refresh.component.html',
  styleUrls: ['./q41-delete-refresh.component.css']
})
export class Q41DeleteRefreshComponent implements OnInit {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.users$.subscribe((users) => this.users = users);
  }

  deleteUser(id: number): void {
    this.dataService.deleteLocalUser(id);
  }
}

