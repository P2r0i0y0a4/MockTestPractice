import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q07-parent',
  templateUrl: './q07-parent.component.html',
  styleUrls: ['./q07-parent.component.css']
})
export class Q07ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  parentMessage = 'Hello child, this message came from the parent component.';
}
