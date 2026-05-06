import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q53-wildcard-route',
  templateUrl: './q53-wildcard-route.component.html',
  styleUrls: ['./q53-wildcard-route.component.css']
})
export class Q53WildcardRouteComponent {}

