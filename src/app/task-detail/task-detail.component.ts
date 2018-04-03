import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [ TaskService ]
})
export class TaskDetailComponent implements OnInit {

  taskID: string;
  taskToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private taskService: TaskService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.taskID = urlParameters['id'];
      console.log(this.taskID);
    });
    this.taskToDisplay = this.taskService.getTaskByID(this.taskID);
    console.log(this.taskToDisplay);
  }
}
