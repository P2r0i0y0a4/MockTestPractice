import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q14-track-by',
  templateUrl: './q14-track-by.component.html',
  styleUrls: ['./q14-track-by.component.css']
})
export class Q14TrackByComponent {
  users = [
    { id: 1, name: 'Neha' },
    { id: 2, name: 'Kabir' }
  ];

  trackById(index: number, user: { id: number }): number {
    return user.id;
  }
}

