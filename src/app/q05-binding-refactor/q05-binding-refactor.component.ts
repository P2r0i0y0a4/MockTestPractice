import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q05-binding-refactor',
  templateUrl: './q05-binding-refactor.component.html',
  styleUrls: ['./q05-binding-refactor.component.css']
})
export class Q05BindingRefactorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   userId = 42;
  userName = 'Alice';
  color = 'tomato';
  fontSize = 18;
  isDisabled = true;
  // isDisabled = false;
  profileUrl = '/user/' + 42;
}

