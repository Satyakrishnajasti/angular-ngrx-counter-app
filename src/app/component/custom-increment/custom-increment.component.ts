import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { customIncrement } from 'src/app/shared/store/counter.actions';
import { getChannel } from 'src/app/shared/store/counter.selector';
import { CounterModel } from 'src/app/shared/store/counter.state';

@Component({
  selector: 'app-custom-increment',
  templateUrl: './custom-increment.component.html',
  styleUrls: ['./custom-increment.component.scss'],
})
export class CustomIncrementComponent implements OnInit {
  counterIncrement?: any;
  actionType: string = 'add';
  channelName?: string;
  counterDisplay!: Number;
  counter?: Observable<CounterModel>;
  $destroy?: Subscription;

  constructor(private store: Store<{ counter: CounterModel }>) {}

  ngOnInit(): void {
    this.$destroy = this.store.select(getChannel).subscribe((data) => {
      this.channelName = data;
    });
  }

  OnIncrement() {
    this.store.dispatch(
      customIncrement({
        value: +this.counterIncrement,
        action: this.actionType,
      })
    );
  }
}
