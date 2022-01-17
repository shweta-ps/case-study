import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DivContainerComponent } from './div-container/div-container.component';

const routes: Routes = [
  {
    path:"" , component:DivContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Route6RoutingModule { }
