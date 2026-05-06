import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q16-loading-message',
  templateUrl: './q16-loading-message.component.html',
  styleUrls: ['./q16-loading-message.component.css']
})
export class Q16LoadingMessageComponent implements OnInit {
  loading = true;
  data = '';

  ngOnInit(): void {
    setTimeout(() => {
      this.data = 'Data loaded successfully';
      this.loading = false;
    }, 3000);
  }
}

