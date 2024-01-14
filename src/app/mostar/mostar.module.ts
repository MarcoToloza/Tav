import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MostarPageRoutingModule } from './mostar-routing.module';

import { MostarPage } from './mostar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MostarPageRoutingModule
  ],
  declarations: [MostarPage]
})
export class MostarPageModule {}
