import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss'],
})
export class DisplayTimerComponent implements OnInit, OnChanges {
  @Input() timer: any;
  myInterval: any;

  constructor() {}

  ngOnInit(): void {
    this.setTimer();
  }

  ngOnChanges() {
    if(!this.timer.reset) {
      this.setTimer();
    }
  }

  setTimer() {
    //  let  myInterval;
    if (this.timer.startTimer) {
      this.myInterval = setInterval(() => {
        if (this.timer.limit > 0) {
          this.timer.limit--;
        }
      }, 1000);
    } else {
      clearInterval(this.myInterval);
    }
  }
}
