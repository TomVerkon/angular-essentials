import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';

export interface iTask {
  id?: string;
  userId?: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingTask = false;
  tasks = DUMMY_TASKS;

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }

  onStartAddTask() {
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(data: iTask) {
    console.log('data: ', data);

    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.user.id,
      ...data,
    });
    this.isAddingTask = false;
  }
}
