import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss'],
})
export class TimerLimitComponent implements OnInit {
  constructor(private countDownService: CountDownService) {}

  @ViewChild('timerLimit') timerLimit!:ElementRef;

  startTimer = false;
  startedCount: number = 0;
  pausedCount: number = 0;

  ngOnInit(): void {}

  timer(timerLimit: any) {
    if(+timerLimit > 0) {

    this.startTimer = !this.startTimer;

    // started
    if (this.startTimer) {
      this.startedCount++;

      let startedLogs = {
        count: this.startedCount,
        time: new Date(),
        startTimer: this.startTimer,
        limit: +timerLimit,
        reset:false
      };
      this.countDownService.timerValue.next(startedLogs);
    } else {
      this.pausedCount++;
      let pausedLogs = {
        count: this.pausedCount,
        time: new Date(),
        startTimer: this.startTimer,
        limit: +timerLimit,
        reset:false
      };

      this.countDownService.timerValue.next(pausedLogs);
    }
  }
}



  reset() {
    const resetObj = {
      reset:true,
      limit:0
    }
    this.countDownService.timerValue.next(resetObj);
  }
}
