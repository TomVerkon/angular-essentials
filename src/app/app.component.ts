import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
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
  selectedUser: User | undefined = undefined;

  onSelectUser(event: User): void {
    this.selectedUser = event;
    console.log(this.selectedUser);
  }
}
