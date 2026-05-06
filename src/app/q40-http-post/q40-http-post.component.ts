import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q40-http-post',
  templateUrl: './q40-http-post.component.html',
  styleUrls: ['./q40-http-post.component.css']
})
export class Q40HttpPostComponent {
  message = '';

  constructor(private dataService: PracticeDataService) {}

  save(): void {
    this.dataService.addUser({ name: 'Posted User', email: 'post@example.com' }).subscribe((user) => {
      this.message = `Sent payload for ${user.name}`;
    });
  }
}

