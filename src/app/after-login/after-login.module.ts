import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AfterLoginPageRoutingModule } from './after-login-routing.module';
import { AfterLoginPage } from './after-login.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    AfterLoginPageRoutingModule
  ],
  providers: [
    HttpClient,
    // Other providers here
  ],
  declarations: [AfterLoginPage]
})
export class AfterLoginPageModule {
  
  constructor(private http: HttpClient) {
    
  }
  
  //show user id and show value in form field
  ngOnInit() {
    let user_id = localStorage.getItem('user_id');
    console.log("logged in user_id ="+user_id);
    //console.log(user_id);
    // this.http.post(environment.apiUrl, '').subscribe((res: any) => {
    //   console.log(res);
    // });
  }
}
