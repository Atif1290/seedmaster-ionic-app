import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';
import { LoginPage } from './login.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    LoginPageRoutingModule
  ],
  providers: [
    HttpClient,
    // Other providers here
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
