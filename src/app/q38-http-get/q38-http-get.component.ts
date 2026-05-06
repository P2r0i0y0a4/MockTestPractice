import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q38-http-get',
  templateUrl: './q38-http-get.component.html',
  styleUrls: ['./q38-http-get.component.css']
})
export class Q38HttpGetComponent {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  load(): void {
    this.dataService.getUsersFromApi().subscribe((users) => this.users = users);
  }
}

