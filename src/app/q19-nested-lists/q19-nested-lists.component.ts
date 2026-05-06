import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q19-nested-lists',
  templateUrl: './q19-nested-lists.component.html',
  styleUrls: ['./q19-nested-lists.component.css']
})
export class Q19NestedListsComponent {
  departments = [
    { name: 'Frontend', employees: ['Asha', 'Ravi'] },
    { name: 'Backend', employees: ['Mina', 'Kabir'] }
  ];
}

