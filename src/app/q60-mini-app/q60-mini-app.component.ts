import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q60-mini-app',
  templateUrl: './q60-mini-app.component.html',
  styleUrls: ['./q60-mini-app.component.css']
})
export class Q60MiniAppComponent implements OnInit {
  users: DemoUser[] = [];
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private dataService: PracticeDataService) {}

  ngOnInit(): void {
    this.dataService.getStaticUsers().subscribe((users) => this.users = users);
  }

  addUser(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.users = [
      ...this.users,
      {
        id: Date.now(),
        name: this.form.value.name || '',
        email: this.form.value.email || ''
      }
    ];
    this.form.reset();
  }

  trackById(index: number, user: DemoUser): number {
    return user.id;
  }
}

