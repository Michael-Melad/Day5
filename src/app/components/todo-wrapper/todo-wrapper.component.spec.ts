import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoWrapperComponent } from './todo-wrapper.component';
import { TodoListComponent } from '../todo-list/todo-list.component'; // ✅ تأكد من استيراد `TodoListComponent`
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('TodoWrapperComponent', () => {
  let component: TodoWrapperComponent;
  let fixture: ComponentFixture<TodoWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoWrapperComponent, TodoListComponent], // ✅ أضف `TodoListComponent`
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


