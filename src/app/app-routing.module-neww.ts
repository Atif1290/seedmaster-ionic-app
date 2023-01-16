import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'rate',
    loadChildren: () => import('./rate/rate.module').then(m => m.RatePageModule)
  },
  {
    path: '',
    redirectTo: 'rate',
    pathMatch: 'full'
  },
  {
    path: 'cost',
    loadChildren: () => import('./cost/cost.module').then(m => m.CostPageModule)
  },
  {
    path: 'calculate',
    loadChildren: () => import('./calculate/calculate.module').then(m => m.CalculatePageModule)
  },
  {
    path: 'seed-master',
    loadChildren: () => import('./seed-master/seed-master.module').then(m => m.SeedMasterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup-design/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'cost-profit',
    loadChildren: () => import('./cost-profit/cost-profit.module').then(m => m.CostProfitPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'personal-info',
    loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
