import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q18-dropdown-fields',
  templateUrl: './q18-dropdown-fields.component.html',
  styleUrls: ['./q18-dropdown-fields.component.css']
})
export class Q18DropdownFieldsComponent {
  type = '';
}

