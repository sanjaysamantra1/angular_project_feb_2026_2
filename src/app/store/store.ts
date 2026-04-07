import { countReducer } from '../reducers/counter.reducer';
import { todoReducer } from '../reducers/todo.reducer';

export const myStore = {
  count: countReducer,
  todoData: todoReducer,
};
