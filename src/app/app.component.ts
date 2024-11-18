import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
import { User } from './user/user.component';

@Component({
  selector: 'app-root',
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
