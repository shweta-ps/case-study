import { Component } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent {


  timerData: any = {
    limit: 0,
    startTimer: false
  };
  logs:any;
  pageName ="Route-3";

  constructor() { }

  setTimer(evt: any) {
    this.timerData = evt;
  }

  pushLogs(evt:any) {
    this.logs = evt;
  }

}
