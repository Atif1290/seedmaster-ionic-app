import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,  
    children: [
      {
        path: 'rate',
        loadChildren: () => import('../rate/rate.module').then(m => m.RatePageModule)
      },
      {
        path: 'cost',
        loadChildren: () => import('../cost/cost.module').then(m => m.CostPageModule)
      },
      {
        path: 'calculate',
        loadChildren: () => import('../calculate/calculate.module').then(m => m.CalculatePageModule)
      },
      {
        path: 'seedmaster',
        loadChildren: () => import('../seed-master/seed-master.module').then(m => m.SeedMasterPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/rate',
        pathMatch: 'full'
      }
    ]    
  },
  {
    path: '',
    redirectTo: '/tabs/rate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}


