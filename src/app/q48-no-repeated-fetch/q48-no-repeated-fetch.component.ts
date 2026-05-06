import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q48-no-repeated-fetch',
  templateUrl: './q48-no-repeated-fetch.component.html',
  styleUrls: ['./q48-no-repeated-fetch.component.css']
})
export class Q48NoRepeatedFetchComponent implements OnInit {
  users: DemoUser[] = [];
  fetchCount = 0;

  constructor(private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.fetchCount += 1;
    this.dataService.getStaticUsers().subscribe((users) => this.users = users);
  }
}

