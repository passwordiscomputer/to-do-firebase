import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail.component'
import { AddTaskComponent } from './add-task/add-task.component'

const appRoutes: Routes = [
    {
      path: '',
      component: TaskListComponent
    },
    {
      path: 'tasks/:id',
      component: TaskDetailComponent
    },
    {
      path: 'add',
      component: AddTaskComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
