import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  template: '<div>{{ name }}</div>',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name!: string;
}
