import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerContainerComponent } from './timer-container/timer-container.component';

const routes: Routes = [
  {
    path: '', component:TimerContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route3RoutingModule { }
