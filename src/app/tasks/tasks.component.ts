import { Component, Input } from '@angular/core';
import { DUMMY_TASKS } from '../dummy-tasks';
import { User } from '../user/user.component';
import { TaskComponent } from './task/task.component';

export interface iTask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  //  @Input({ required: true }) selectedTasks: iTask[] | [] = [];
  tasks = DUMMY_TASKS;

  onCompleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  get selectedUserTasks() {
    return this.tasks.filter((task) => task.userId === this.user.id);
  }
}
