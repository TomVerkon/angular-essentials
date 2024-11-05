import { Component } from '@angular/core';
import { DUMMY_TASKS } from './dummy-tasks';
import { DUMMY_USERS } from './dummy-user';
import { HeaderComponent } from './header/header.component';
import { iTask, TasksComponent } from './tasks/tasks.component';
import { User, UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  tasks: iTask[] = DUMMY_TASKS;
  selectedUser: User | undefined = undefined;
  selectedTasks: iTask[] | [] = [];

  onSelectUser(event: User): void {
    this.selectedUser = event;
    console.log(this.selectedUser);
    this.selectedTasks = this.tasks.filter(
      (task) => task.userId === this.selectedUser!.id
    );
    console.log(this.selectedTasks);
  }
}
