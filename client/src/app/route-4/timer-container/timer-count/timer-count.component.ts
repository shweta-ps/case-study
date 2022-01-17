import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss'],
})

export class TimerCountComponent implements OnInit, OnDestroy {

  startedCount = 0;
  pausedCount = 0;
  subscription:any;

  constructor(private countDownService: CountDownService) {}

  ngOnInit(): void {
  this.subscription =  this.countDownService.timerValue.subscribe((timerObj) => {
      if(timerObj !== null) {
        // if reset clicked
        if(timerObj.reset) {
          this.startedCount = 0;
          this.pausedCount = 0;
        }
        // normal flow
        else {
          this.setLogs(timerObj);
        }
       

      }
    });
  }

  setLogs(timerObj: any) {
    if (timerObj !== undefined) {
      if (timerObj.startTimer) {
        this.startedCount++;
      } else {
        this.pausedCount++;
      }
    }
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
