import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss'],
})
export class DisplayTimerComponent implements OnInit, OnDestroy {
  constructor(private countDownService: CountDownService) {}
  timer: any;
  myInterval: any;
  subscription:any;

  ngOnInit(): void {
   this.subscription = this.countDownService.timerValue.subscribe((timerObj) => {
      if(timerObj !== null) {
        this.timer = timerObj;
         if(!timerObj.reset) {
          this.setTimer();
        }
      
      }
    
    });
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

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
