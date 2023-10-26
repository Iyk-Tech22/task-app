import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {Task} from "../../task_model"
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent{

  // OutPut Events
 
  @Output() onDeleteTask:EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Task> = new EventEmitter();


  @Input() task:any = "";
  faTimes = faTimes

  onDelete() {
    this.onDeleteTask.emit()
  }

  onToggle(){
    this.onToggleReminder.emit()
  }

}
