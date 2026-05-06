import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q50-router-links',
  templateUrl: './q50-router-links.component.html',
  styleUrls: ['./q50-router-links.component.css']
})
export class Q50RouterLinksComponent {}

