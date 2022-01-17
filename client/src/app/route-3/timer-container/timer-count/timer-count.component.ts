import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-timer-count',
  templateUrl: './timer-count.component.html',
  styleUrls: ['./timer-count.component.scss'],
})
export class TimerCountComponent implements OnChanges {
  @Input() logs: any;
  startedCount: number = 0;
  pausedCount: number = 0;

  constructor() {}

  ngOnChanges() {
    if(this.logs?.reset) {
      this.startedCount = 0;
      this.pausedCount = 0;
    } else {
      this.setLogs();
    }
  }

  setLogs() {
    if (this.logs !== undefined) {
      if (this.logs.started) {
        this.startedCount++;
      } else {
        this.pausedCount++;
      }
    }
  }
}
