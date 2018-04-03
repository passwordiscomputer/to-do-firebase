import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../models/task.model'
import { TaskService } from '../task.service'
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css'],
  providers: [TaskService]
})
export class EditTaskComponent implements OnInit {
  @Input() selectedTask;
  constructor(private taskService: TaskService) { }

  beginUpdatingTask(taskToUpdate){
    this.taskService.updateTask(taskToUpdate);
  }

  beginDeletingTask(taskToDelete){
    if(confirm("are you sure you want to delete this task?")){
      this.taskService.deleteTask(taskToDelete);
    }

  }

  ngOnInit() {
  }

}
