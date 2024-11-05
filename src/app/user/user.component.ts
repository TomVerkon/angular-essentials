import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // traditional parameter passing
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<User>();
  // new signal parameter passing
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
    // return 'assets/users/' + this.avatar();
  }

  onSelectUser() {
    this.select.emit(this.user);
    // this.select.emit(this.id());
  }
}
