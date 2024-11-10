import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { iTask } from '../tasks.component';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<iTask>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onCancel() {
    this.cancel.emit();
  }

  //   export interface iTask {
  //   id?: string;
  //   userId?: string;
  //   title: string;
  //   summary: string;
  //   dueDate: string;
  // }
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDate,
    });
  }
}
