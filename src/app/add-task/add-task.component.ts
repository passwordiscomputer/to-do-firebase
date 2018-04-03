import { Component } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../task.service'

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
  providers: [TaskService]
})
export class AddTaskComponent {

  constructor(private taskService: TaskService) { }



  submitForm(title: string, detail: string) {
    var newTask: Task = new Task(title, detail);
    this.taskService.addTask(newTask);
}

}
