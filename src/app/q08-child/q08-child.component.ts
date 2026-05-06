import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-q08-child',
  templateUrl: './q08-child.component.html',
  styleUrls: ['./q08-child.component.css']
})
export class Q08ChildComponent {
  @Output() messageSent = new EventEmitter<string>();

  sendMessage(): void {
    this.messageSent.emit('Child button clicked successfully.');
  }
}

