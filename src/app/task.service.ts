import { Injectable } from '@angular/core';
import { Task } from './models/task.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';



@Injectable()
export class TaskService {

  tasks: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.tasks = database.list('tasks');
  }

  getTasks() {
    return this.tasks;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  getTaskByID(taskID: string){
    return this.database.object('tasks/' + taskID);
  }

  updateTask(localUpdatedTask){
    var taskEntryInFirebase = this.getTaskByID(localUpdatedTask.$key);
    taskEntryInFirebase.update({title: localUpdatedTask.title,
    detail: localUpdatedTask.detail});
  }

  deleteTask(localTaskToDelete){
    var taskEntryInFirebase = this.getTaskByID(localTaskToDelete.$key);
    taskEntryInFirebase.remove();
  }

}
