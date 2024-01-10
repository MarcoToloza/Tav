import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RestrablecerPageRoutingModule } from './restrablecer-routing.module';
import { RestrablecerPage } from './restrablecer.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestrablecerPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RestrablecerPage]
})
export class RestrablecerPageModule {}
