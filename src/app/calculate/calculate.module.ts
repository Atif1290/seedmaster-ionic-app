import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculatePageRoutingModule } from './calculate-routing.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CalculatePage } from './calculate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    CalculatePageRoutingModule
  ],
  providers: [
    HttpClient,
    // Other providers here
  ],
  declarations: [CalculatePage]
})
export class CalculatePageModule {}
