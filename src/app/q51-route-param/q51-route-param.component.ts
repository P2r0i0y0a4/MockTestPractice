import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q51-route-param',
  templateUrl: './q51-route-param.component.html',
  styleUrls: ['./q51-route-param.component.css']
})
export class Q51RouteParamComponent implements OnInit {
  id = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => this.id = params.get('id') || '');
  }
}

