import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit {
  signupForm: FormGroup;
  confirmationsList = [
    { value: 'isOver16', label: 'I confirm that I am older than 16' },
    { value: 'agreedTerms', label: 'I agree to the terms and conditions' }
  ];
  submitted = false;
  signupMessage = '';

  ngOnInit(): void {
  }

  constructor(private fb: FormBuilder, private signupService: SignupService) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, MockComponent.gmailValidator]],
      password: ['', [Validators.required, MockComponent.passwordNumberValidator]],
      selectedConfirmations: this.fb.array([])
    });
  }

  static gmailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (!value) {
      return null;
    }

    return /^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(value) ? null : { gmail: true };
  }

  static passwordNumberValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;

    if (!value) {
      return null;
    }

    return /\d/.test(value) ? null : { numberRequired: true };
  }

  get selectedConfirmations(): FormArray {
    return this.signupForm.get('selectedConfirmations') as FormArray;
  }

  onCheckboxChange(event: any): void {
    const confirmationsArray = this.signupForm.get('selectedConfirmations') as FormArray;

    if (event.target.checked) {
      confirmationsArray.push(this.fb.control(event.target.value));
    } else {
      const index = confirmationsArray.controls.findIndex(x => x.value === event.target.value);

      if (index !== -1) {
        confirmationsArray.removeAt(index);
      }
    }
  }

  isConfirmationSelected(value: string): boolean {
    return this.selectedConfirmations.value.includes(value);
  }

  get isOver16Selected(): boolean {
    return this.isConfirmationSelected('isOver16');
  }

  get agreedTermsSelected(): boolean {
    return this.isConfirmationSelected('agreedTerms');
  }

  get isSubmitDisabled(): boolean {
    return this.signupForm.invalid || !this.isOver16Selected || !this.agreedTermsSelected;
  }

  onSubmit(): void {
    this.submitted = true;
    this.signupMessage = '';

    if (this.isSubmitDisabled) {
      this.signupForm.markAllAsTouched();
      return;
    }

    this.signupService.signup(this.signupForm.value)
      .subscribe({
        next: (res) => {
          console.log('Signup Successful!', res);
          this.signupMessage = 'Signup successful!';
          this.selectedConfirmations.clear();
          this.signupForm.reset({
            username: '',
            email: '',
            password: ''
          });
          this.submitted = false;
        },
        error: (err) => {
          console.error('Signup failed', err);
          this.signupMessage = 'Signup failed. Please try again.';
        }
      });
  }
}
