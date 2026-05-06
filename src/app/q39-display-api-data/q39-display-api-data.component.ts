import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q39-display-api-data',
  templateUrl: './q39-display-api-data.component.html',
  styleUrls: ['./q39-display-api-data.component.css']
})
export class Q39DisplayApiDataComponent implements OnInit {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.getStaticUsers().subscribe((users) => this.users = users);
  }
}

