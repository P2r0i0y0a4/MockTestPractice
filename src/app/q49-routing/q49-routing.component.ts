import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q49-routing',
  templateUrl: './q49-routing.component.html',
  styleUrls: ['./q49-routing.component.css']
})
export class Q49RoutingComponent {}

