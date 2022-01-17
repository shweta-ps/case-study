import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.scss']
})
export class DisplayLogsComponent implements OnChanges {

  @Input() logs: any;
  logsHistory: any[] = [];

  constructor() { }
 
  ngOnChanges() {
    if(this.logs !== undefined) {
      if( this.logs.reset) {
        this.logsHistory = [];
      }
      else {
        this.logsHistory.push(this.logs);

      }
    }
  }
}
