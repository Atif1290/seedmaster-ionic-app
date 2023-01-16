import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CostProfitPageRoutingModule } from './cost-profit-routing.module';

import { CostProfitPage } from './cost-profit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CostProfitPageRoutingModule
  ],
  declarations: [CostProfitPage]
})
export class CostProfitPageModule {}
