import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q54-nested-routes',
  templateUrl: './q54-nested-routes.component.html',
  styleUrls: ['./q54-nested-routes.component.css']
})
export class Q54NestedRoutesComponent {}

