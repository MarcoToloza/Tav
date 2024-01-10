import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestrablecerPage } from './restrablecer.page';

const routes: Routes = [
  {
    path: '',
    component: RestrablecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestrablecerPageRoutingModule {}
