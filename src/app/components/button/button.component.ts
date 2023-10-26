import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string = "";
  @Input() color: string = "";
  
  // Create event emitter
  @Output() clickEvent = new EventEmitter();


  // Passing Event to Parent Component
  onClick() {
    this.clickEvent.emit()
  }
}
