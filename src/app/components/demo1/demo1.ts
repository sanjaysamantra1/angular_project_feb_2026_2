import { Component } from '@angular/core';

@Component({
  selector: 'app-demo1',
  imports: [],
  templateUrl: './demo1.html',
  styleUrl: './demo1.css',
})
export class Demo1 {


  fetchuserData():any{
    return fetch('https://jsonplaceholder.typicode.com/users')
  }

  isEven(num: number) {
    return num % 2 == 0;
  }

  processData(data: any) {
    console.log('Processing data:', data);
    return data.length;
  }
  fetchData() {
    const data = ['item1', 'item2', 'item3'];
    return this.processData(data);
  }
}
