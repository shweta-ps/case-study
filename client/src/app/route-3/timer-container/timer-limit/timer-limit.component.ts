import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer-limit',
  templateUrl: './timer-limit.component.html',
  styleUrls: ['./timer-limit.component.scss']
})
export class TimerLimitComponent {

  constructor() { }

  startTimer = false;
  startedCount :number = 0;
  pausedCount :number = 0;


  @Output() emitter: EventEmitter<any> = new EventEmitter<any>();
  @Output() logs: EventEmitter<any> = new EventEmitter<any>();

  timer(timerLimit: any) {
    if(+timerLimit > 0) {
    this.startTimer = !this.startTimer;

    // started
    if(this.startTimer) {
      this.startedCount++;
       let startedLogs = {
        count :this.startedCount,
        time:new Date(),
        started:true,
        reset:false
    }
    this.logs.emit(startedLogs);

  }
    else {
      this.pausedCount++;
      let pausedLogs = {
        count :this.pausedCount,
        time:new Date(),
        started:false,
        reset:false
      }

      this.logs.emit(pausedLogs);
    }

    let emitObject = {
      limit: +timerLimit,
      startTimer: this.startTimer,
      reset:false
    }
    this.emitter.emit(emitObject);
  }
  }

  reset() {
    const resetObj = {
      reset:true,
      limit:0
    }
    this.logs.emit(resetObj);
    this.emitter.emit(resetObj);
  }
}
