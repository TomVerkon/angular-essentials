import { Component, Input } from '@angular/core';
import { User } from '../user/user.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [],
  template: '<h2> {{ this.user.name }} </h2>',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
}
