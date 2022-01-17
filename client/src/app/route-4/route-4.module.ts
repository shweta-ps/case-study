import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route4RoutingModule } from './route-4-routing.module';
import { TimerContainerComponent } from './timer-container/timer-container.component';
import { DisplayTimerComponent } from './timer-container/display-timer/display-timer.component';
import { TimerLimitComponent } from './timer-container/timer-limit/timer-limit.component';
import { DisplayLogsComponent } from './timer-container/display-logs/display-logs.component';
import { TimerCountComponent } from './timer-container/timer-count/timer-count.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    TimerContainerComponent,
    DisplayTimerComponent,
    TimerLimitComponent,
    DisplayLogsComponent,
    TimerCountComponent
  ],
  imports: [
    CommonModule,
    Route4RoutingModule,
    SharedModule
  ]
})
export class Route4Module { }
