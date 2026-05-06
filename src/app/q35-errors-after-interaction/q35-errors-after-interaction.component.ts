import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q35-errors-after-interaction',
  templateUrl: './q35-errors-after-interaction.component.html',
  styleUrls: ['./q35-errors-after-interaction.component.css']
})
export class Q35ErrorsAfterInteractionComponent {
  form = this.fb.group({ name: ['', Validators.required] });

  constructor(private fb: FormBuilder) {}
}

