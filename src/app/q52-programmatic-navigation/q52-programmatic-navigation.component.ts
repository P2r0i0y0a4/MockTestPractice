import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q52-programmatic-navigation',
  templateUrl: './q52-programmatic-navigation.component.html',
  styleUrls: ['./q52-programmatic-navigation.component.css']
})
export class Q52ProgrammaticNavigationComponent {
  form = this.fb.group({ name: ['', Validators.required] });

  constructor(private fb: FormBuilder, private router: Router) {}

  submit(): void {
    if (this.form.valid) {
      this.router.navigate(['/question', 52]);
    }
  }
}

