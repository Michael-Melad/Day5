import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoListComponent } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-wrapper',
  standalone: true,
  imports: [CommonModule, TodoFormComponent, TodoListComponent],
  templateUrl: './todo-wrapper.component.html',
  styleUrls: ['./todo-wrapper.component.css']
})
export class TodoWrapperComponent {
  todos: string[] = []; 

  addTodo(task: string): void {
    this.todos.push(task); 
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1); 
}}