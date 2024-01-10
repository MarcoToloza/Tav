import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestrablecerPageRoutingModule } from './restrablecer-routing.module';

import { RestrablecerPage } from './restrablecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestrablecerPageRoutingModule
  ],
  declarations: [RestrablecerPage]
})
export class RestrablecerPageModule {}
