import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Demo1 } from './components/demo1/demo1';
import { MaterialDemo } from './components/material-demo/material-demo';
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';
import { EmployeeList } from './components/employee-list/employee-list';

@Component({
  selector: 'app-root',
  imports: [
    // Demo1,
    // MaterialDemo,
    // Counter
    // TodoCrud
    EmployeeList
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular_project_feb_2026_2');

  add(a: number, b: number) {
    return a + b;
  }

  sumofDigits(num: number) {
    let sum = 0;
    while (num != 0) {
      let rem = num % 10;
      sum = sum + rem;
      num = Math.floor(num / 10);
    }
    return sum;
  }

  cars = ['Tata','Honda'];
  addNewCar(carName:string){
    this.cars.push(carName)
  }
}
