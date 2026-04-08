import { countReducer } from '../reducers/counter.reducer';
import { employeesReducer } from '../reducers/employee.reducer';
import { todoReducer } from '../reducers/todo.reducer';

export const myStore = {
  count: countReducer,
  todoData: todoReducer,
  employees:employeesReducer
};
