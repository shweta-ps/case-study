import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route1RoutingModule } from './route-1-routing.module';
import { BannerComponent } from './banner/banner.component';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    Route1RoutingModule,
    SharedModule
  ]
})
export class Route1Module { }
