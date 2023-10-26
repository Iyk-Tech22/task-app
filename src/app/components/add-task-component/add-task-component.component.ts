import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task_model';

@Component({
  selector: 'app-add-task-component',
  templateUrl: './add-task-component.component.html',
  styleUrls: ['./add-task-component.component.css']
})
export class AddTaskComponentComponent {

  text:string = "Build a Dashboard";
  day:string = "Mon, 23, Nov 2023";
  reminder:boolean = false;

  @Output() addTask:EventEmitter<Task> = new EventEmitter()

  onSubmit() {
    if(!this.text  || !this.day){
      alert("Fields can not empty")
      return;
    }
     const newTask:Task = {
        text: this.text,
        day: this.day,
        reminder: this.reminder
    }

    // Emitting addTask Event
    this.addTask.emit(newTask)
    this.text = ""
    this.day = ""
    this.reminder = false
  }


}
