import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addTodo, deleteTodo, toggleTodo } from '../../actions/todo.actions';

@Component({
  selector: 'app-todo-crud',
  imports: [CommonModule],
  templateUrl: './todo-crud.html',
  styleUrl: './todo-crud.css',
})
export class TodoCrud {
  todos$: Observable<any> | undefined;
  constructor(private store: Store) {
    this.todos$ = this.store.select((state: any) => state.todoData); // selector
  }

  deleteMyTodo(id: number) {
    this.store.dispatch(deleteTodo({ id: id }));
  }
  toggleMyTodo(id: number) {
    this.store.dispatch(toggleTodo({ id }));
  }

  addMyToDo(todoText: string) {
    const newToDo = { id: 4, text: todoText, isCompleted: false };
    this.store.dispatch(addTodo({ payload: newToDo }));
  }
}
