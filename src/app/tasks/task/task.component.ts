import { Component, EventEmitter, Input, Output } from '@angular/core';

interface iTask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: iTask;
  @Output() complete = new EventEmitter<string>();

  clickedCompleteTask() {
    this.complete.emit(this.task.id);
  }
}
