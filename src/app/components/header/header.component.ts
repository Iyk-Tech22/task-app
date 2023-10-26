import { Component } from '@angular/core';
import { uiService } from 'src/app/services/ui.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  
  title:string = "Task-Tracker"
  showAddTask:boolean = false
  text:string = "Add";
  color:string = "green";

  constructor(private UiService:uiService, private router:Router) {
    this.UiService.onToggle().subscribe((value => this.showAddTask = value))
  }

  // EVENT HANDLER
  toggleAddTask() {
    this.UiService.toggleAddTask()
  }

  hasRoute(route:string):boolean {
    return this.router.url == route;
  }
  
}
