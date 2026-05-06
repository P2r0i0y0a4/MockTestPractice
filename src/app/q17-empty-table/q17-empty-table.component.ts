import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q17-empty-table',
  templateUrl: './q17-empty-table.component.html',
  styleUrls: ['./q17-empty-table.component.css']
})
export class Q17EmptyTableComponent {
  rows: { name: string; role: string }[] = [];
}

