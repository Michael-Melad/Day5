
import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  @Output() newTask = new EventEmitter<string>(); 
  task: string = '';

  addTask(): void {
    if (this.task.trim()) {
      this.newTask.emit(this.task); 
      this.task = ''; 
    }
  }
}
