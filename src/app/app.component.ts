import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx';

  ngOnInit(): void {
    this.palindrome('aba');
    this.sample();
  }

  palindrome(text: string) {
    let sample!: string;
    if (text) {
      sample = text.split('').reverse().join('');
    }
    return text === sample
      ? console.log('Palindrome')
      : console.log('Not Palindrome');
  }

  sample() {
    let x = 10;
    let a=0;
    let b=0;

    x=a+b;
    let y = 4;
    y=a-b;

    console.log(x-y);
    return x - y;
  }
}
