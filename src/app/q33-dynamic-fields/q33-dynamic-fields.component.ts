import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, of } from 'rxjs';
import { DemoUser, PracticeDataService } from '../practice-data.service';

@Component({
  selector: 'app-q33-dynamic-fields',
  templateUrl: './q33-dynamic-fields.component.html',
  styleUrls: ['./q33-dynamic-fields.component.css']
})
export class Q33DynamicFieldsComponent {
  form = this.fb.group({
    skills: this.fb.array([this.fb.control('')])
  });
  submittedData: any;

  constructor(private fb: FormBuilder) {}

  get skills(): FormArray {
    return this.form.get('skills') as FormArray;
  }

  addSkill(): void {
    this.skills.push(this.fb.control(''));
  }

  onSubmit() {
  console.log(this.form.value);
  this.submittedData = this.form.value;

}
}

