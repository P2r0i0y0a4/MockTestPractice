import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q09-disable-submit',
  templateUrl: './q09-disable-submit.component.html',
  styleUrls: ['./q09-disable-submit.component.css']
})
export class Q09DisableSubmitComponent {
  name = '';
}

