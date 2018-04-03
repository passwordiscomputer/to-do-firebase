import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { FirebaseListObservable } from 'angularfire2/database';



@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  providers: [TaskService]
})
export class TaskListComponent implements OnInit {

  constructor(private router: Router, private taskService: TaskService){}

  tasks: FirebaseListObservable<any[]>;

  goToDetailPage(clickedTask: Task){
    this.router.navigate(['tasks', clickedTask.$key ])
  }

  ngOnInit(){
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks)
  }

}
