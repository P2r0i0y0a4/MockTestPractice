import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q03-toggle',
  templateUrl: './q03-toggle.component.html',
  styleUrls: ['./q03-toggle.component.css']
})
export class Q03ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isVisible = false;

  toggle() {
    this.isVisible = !this.isVisible;
  }


}
