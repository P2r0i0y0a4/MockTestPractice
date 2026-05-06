import { Component, OnInit } from '@angular/core';

// Define an interface for type safety
interface User {
  name: string;
  email: string;
  age: number;
  role: string;
}
@Component({
  selector: 'app-q06-lifecycle',
  templateUrl: './q06-lifecycle.component.html',
  styleUrls: ['./q06-lifecycle.component.css']
})
export class Q06LifecycleComponent implements OnInit {

  // WRONG — accessing this directly in template causes undefined error
  // user: User;

  //  CORRECT — initialize as null, guard in template
  user: User | null = null;
  isLoading = true;
  initMessage = '';

  constructor() {
    //  NEVER fetch data or manipulate DOM here
    // constructor is only for dependency injection
    this.initMessage = 'Constructor called ✅';
    console.log('1. Constructor called');
  }

  ngOnInit(): void {
    //  THIS is the right place to initialize data
    console.log('2. ngOnInit called');
    this.initMessage += ' → ngOnInit called ✅';

    // Simulate a small delay like a real API call
    setTimeout(() => {
      this.user = {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        age: 28,
        role: 'Admin'
      };
      this.isLoading = false;
      console.log('3. Data loaded ✅');
    }, 2500);
  }

}
