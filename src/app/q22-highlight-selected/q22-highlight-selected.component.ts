import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q22-highlight-selected',
  templateUrl: './q22-highlight-selected.component.html',
  styleUrls: ['./q22-highlight-selected.component.css']
})
export class Q22HighlightSelectedComponent {
  items = [
    { name: 'Angular', selected: true },
    { name: 'React', selected: false },
    { name: 'Vue', selected: false }
  ];
}

