import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-q07-child',
  templateUrl: './q07-child.component.html',
  styleUrls: ['./q07-child.component.css']
})
export class Q07ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() message = '';
}
