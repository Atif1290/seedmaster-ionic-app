import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CostProfitPage } from './cost-profit.page';

const routes: Routes = [
  {
    path: '',
    component: CostProfitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CostProfitPageRoutingModule {}
