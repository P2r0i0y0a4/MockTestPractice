import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q58-truncate-text',
  templateUrl: './q58-truncate-text.component.html',
  styleUrls: ['./q58-truncate-text.component.css']
})
export class Q58TruncateTextComponent {
  text = 'This is a very long paragraph that should be shortened before displaying in the UI.';
}

