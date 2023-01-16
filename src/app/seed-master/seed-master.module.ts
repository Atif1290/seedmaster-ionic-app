import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeedMasterPageRoutingModule } from './seed-master-routing.module';

import { SeedMasterPage } from './seed-master.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeedMasterPageRoutingModule
  ],
  declarations: [SeedMasterPage]
})
export class SeedMasterPageModule {}
