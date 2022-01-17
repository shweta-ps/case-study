import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./route-1/route-1.module').then(m => m.Route1Module)
  },
  {
    path: 'route-2',
    loadChildren: () => import('./route-2/route-2.module').then(m => m.Route2Module)
  },
  
  {
    path: 'route-3',
    loadChildren: () => import('./route-3/route-3.module').then(m => m.Route3Module)
  },
  {
    path: 'route-4',
    loadChildren: () => import('./route-4/route-4.module').then(m => m.Route4Module)
  },
  {
    path: 'route-5',
    loadChildren: () => import('./route-5/route-5.module').then(m => m.Route5Module)
  },
  {
    path: 'route-6',
    loadChildren: () => import('./route-6/route-6.module').then(m => m.Route6Module)
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
