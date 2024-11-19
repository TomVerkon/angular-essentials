import { Component, inject, Input } from '@angular/core';
import { TasksService } from '../tasks.service';

interface iTask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: iTask;
  private tasksService = inject(TasksService);

  clickedCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
