import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q59-currency-pipe',
  templateUrl: './q59-currency-pipe.component.html',
  styleUrls: ['./q59-currency-pipe.component.css']
})
export class Q59CurrencyPipeComponent {
  price = 1299;
}

