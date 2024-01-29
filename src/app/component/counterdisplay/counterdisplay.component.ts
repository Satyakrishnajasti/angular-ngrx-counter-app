import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterModel } from 'src/app/shared/store/counter.state';
import { Observable, Subscription } from 'rxjs';
import { getCounter } from 'src/app/shared/store/counter.selector';
@Component({
  selector: 'app-counterdisplay',
  templateUrl: './counterdisplay.component.html',
  styleUrls: ['./counterdisplay.component.scss'],
})
export class CounterdisplayComponent implements OnInit, OnDestroy {
  constructor(private store: Store<{ counter: CounterModel }>) {}

  counterDisplay!: Number;
  channelName?: string;
  counter?: Observable<CounterModel>;
  $destroy?: Subscription;
  ngOnInit(): void {
    this.$destroy = this.store.select(getCounter).subscribe((data) => {
      this.counterDisplay = data;
    });
    this.counter = this.store.select('counter');
  }

  ngOnDestroy(): void {
    if (this.$destroy) {
      this.$destroy.unsubscribe();
    }
  }
}
