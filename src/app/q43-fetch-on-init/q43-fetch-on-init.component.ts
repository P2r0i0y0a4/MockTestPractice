import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q43-fetch-on-init',
  templateUrl: './q43-fetch-on-init.component.html',
  styleUrls: ['./q43-fetch-on-init.component.css']
})
export class Q43FetchOnInitComponent implements OnInit {
  users: DemoUser[] = [];

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.getStaticUsers().subscribe((users) => this.users = users);
  }
}

