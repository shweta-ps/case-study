import { Component, OnDestroy, OnInit } from '@angular/core';
import { CountDownService } from '../../services/count-down.service';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.scss']
})
export class DisplayLogsComponent implements OnInit,OnDestroy {

  constructor(private countDownService: CountDownService) {}

  logsHistory: any[] = [];
  subscription:any;

  ngOnInit(): void {
  this.subscription =  this.countDownService.timerValue.subscribe((timerObj) => {
      if(timerObj !== null) {
        // when reset clicked
        if(timerObj.reset) {
          this.logsHistory = [];
        }
        // normal flow
        else {
          this.logsHistory.push(timerObj);
        }
        
    }});
  
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
