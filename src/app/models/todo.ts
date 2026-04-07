import { TodoCrud } from "../components/todo-crud/todo-crud";

export interface Todo {
  id: number;
  text: string;
  isCompleted: boolean;
}
