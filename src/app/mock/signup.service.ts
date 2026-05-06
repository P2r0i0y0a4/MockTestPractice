import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly signupUrl = 'https://api.test.com/signup';

  constructor(private http: HttpClient) { }

  signup(formData: any) {
    return this.http.post(this.signupUrl, formData);
  }
}
