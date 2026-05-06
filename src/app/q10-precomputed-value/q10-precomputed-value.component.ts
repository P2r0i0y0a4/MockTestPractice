import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q10-precomputed-value',
  templateUrl: './q10-precomputed-value.component.html',
  styleUrls: ['./q10-precomputed-value.component.css']
})
export class Q10PrecomputedValueComponent implements OnInit {
  prices = [100, 250, 300];
  total = 0;

  ngOnInit(): void {
    this.total = this.prices.reduce((sum, price) => sum + price, 0);
  }
}

