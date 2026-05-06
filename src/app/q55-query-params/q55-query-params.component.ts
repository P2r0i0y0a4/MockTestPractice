import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q55-query-params',
  templateUrl: './q55-query-params.component.html',
  styleUrls: ['./q55-query-params.component.css']
})
export class Q55QueryParamsComponent implements OnInit {
  filter = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => this.filter = params.get('filter') || '');
  }

  go(): void {
    this.router.navigate(['/query-demo'], { queryParams: { filter: 'active' } });
  }
}

