import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() tasks: string[] = [];
  @Output() deleteTask = new EventEmitter<number>(); 

  removeTask(index: number): void {
    this.deleteTask.emit(index); 
  }
}





