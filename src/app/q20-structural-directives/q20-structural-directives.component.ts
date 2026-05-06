import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q20-structural-directives',
  templateUrl: './q20-structural-directives.component.html',
  styleUrls: ['./q20-structural-directives.component.css']
})
export class Q20StructuralDirectivesComponent {
  users = [
    { name: 'Asha', active: true },
    { name: 'Ravi', active: false },
    { name: 'Mina', active: true }
  ];
}

