import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabsPageRoutingModule } from './tabs-routing.module';
import { TabsPage } from './tabs.page';
import { Router } from '@angular/router';

// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,  
//     children: [
//       {
//         path: 'rate',
//         children: [
//           {
//             path: 'rate',
//             loadChildren: () => import('../tabs/rate/rate.module').then(m => m.RatePageModule)
//           },
//         ]
//       },
//       {
//         path: 'cost',
//         children: [
//           {
//             path: 'cost',
//             loadChildren: () => import('../tabs/cost/cost.module').then(m => m.CostPageModule)
//           },
//         ]
//       },
//       {
//         path: 'calculate',
//         children: [
//           {
//             path: 'calculate',
//             loadChildren: () => import('../calculate/calculate.module').then(m => m.CalculatePageModule)
//           },
//         ]
//       },
//       {
//         path: 'seed-master',
//         children: [
//           {
//             path: 'seed-master',
//             loadChildren: () => import('./seed-master/seed-master.module').then(m => m.SeedMasterPageModule)
//           },
//         ]
//       },
//     ]
//   },
// ];


// const routes: Routes = [
//   {
//     path: '',
//     component: TabsPage,
//     children: [
//       {
//         path: 'rate',
//         children: [
//           {
//             path: 'rate',
//             loadChildren: () => import('../rate/rate.module').then(m => m.RatePageModule)
//           }
//         ]
//       },
//       {
//         path: 'cost',
//         loadChildren: () => import('../cost/cost.module').then(m => m.CostPageModule)
//       },
//       {
//         path: 'calculate',
//         loadChildren: () => import('../calculate/calculate.module').then(m => m.CalculatePageModule)
//       },
//       {
//         path: 'seed-master',
//         loadChildren: () => import('../seed-master/seed-master.module').then(m => m.SeedMasterPageModule)
//       },
//       {
//         path: '',
//         redirectTo: '/app/tabs/rate',
//         pathMatch: 'full'
//       }
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/app/tabs/rate',
//     pathMatch: 'full'
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
