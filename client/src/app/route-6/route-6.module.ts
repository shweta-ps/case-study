import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route6RoutingModule } from './route-6-routing.module';
import { DivContainerComponent } from './div-container/div-container.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    DivContainerComponent
  ],
  imports: [
    CommonModule,
    Route6RoutingModule,
    SharedModule
  ]
})
export class Route6Module { }
