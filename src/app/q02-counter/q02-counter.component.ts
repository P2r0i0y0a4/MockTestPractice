import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q02-counter',
  templateUrl: './q02-counter.component.html',
  styleUrls: ['./q02-counter.component.css']
})
export class Q02CounterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  counter = 0;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  reset() {
    this.counter = 0;
  }

}
