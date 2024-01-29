import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeChannelName,
  decrement,
  increment,
  reset,
} from 'src/app/shared/store/counter.actions';

@Component({
  selector: 'app-counterbutton',
  templateUrl: './counterbutton.component.html',
  styleUrls: ['./counterbutton.component.scss'],
})
export class CounterbuttonComponent {
  channelName!: string;
  constructor(private store: Store<{ counter: { counter: Number } }>) {}
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  changeChannelName() {
    this.store.dispatch(changeChannelName({ channelName: this.channelName }));
  }
}
