import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number>;
  constructor(private store: Store) {
    this.count$ = store.select((stateObj: any) => stateObj.count); // Selector
  }

  incrementCount() {
    this.store.dispatch(increment());
  }
  decrementCount() {
    this.store.dispatch(decrement());
  }
  resetCount() {
    this.store.dispatch(reset());
  }
}
