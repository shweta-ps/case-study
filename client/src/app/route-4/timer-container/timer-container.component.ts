import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-container',
  templateUrl: './timer-container.component.html',
  styleUrls: ['./timer-container.component.scss']
})
export class TimerContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pageName ="Route-4";
  timerData: any = {
    limit: 0,
    startTimer: false
  };
  
  logs:any;

}
