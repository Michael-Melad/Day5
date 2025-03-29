import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoWrapperComponent } from './components/todo-wrapper/todo-wrapper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoWrapperComponent], // ✅ Proper imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
}