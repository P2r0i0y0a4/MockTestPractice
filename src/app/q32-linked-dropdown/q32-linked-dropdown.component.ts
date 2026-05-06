import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q32-linked-dropdown',
  templateUrl: './q32-linked-dropdown.component.html',
  styleUrls: ['./q32-linked-dropdown.component.css']
})
export class Q32LinkedDropdownComponent implements OnInit {
  form = this.fb.group({
    country: [''],
    city: ['']
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.get('country')?.valueChanges.subscribe((country) => {
      this.form.patchValue({ 
        city: country === 'India' ? 'Pune' : country === 'USA' ? 'New York' : '' }, { emitEvent: false });
    });
  }
}

