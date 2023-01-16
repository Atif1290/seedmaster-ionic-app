import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

//imort 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
  @Injectable({
    providedIn: 'root'
  })
export class LoginPage implements OnInit {
  form: FormGroup;
  username = '';
  password = ''; 
    constructor( private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // Initialize the field with an empty string
      password: ['', Validators.required] // Initialize the field with an empty string
      
    });
   }
  ngOnInit() {
    let user_id = localStorage.getItem('user_id');
    console.log("logged in user_id ="+user_id);
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Login Successfully!',
      cssClass: 'alert-center',
      buttons: [
         {
          text: 'OK',
          handler: () => {
          this.router.navigateByUrl('settings');
          }
        }
      ]
    });
    await alert.present();
  }
  async emailAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Enter Email!',
      cssClass: 'alert-center',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async notExistEmail() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Email is not in system',
      cssClass: 'alert-center',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async passAlert() {
    const alert = await this.alertController.create({
      header: 'Message',
      message: 'Enter Password!',
      cssClass: 'alert-center',
      buttons: ['OK'],
    });
    await alert.present();
  }
  onClick() {
    //get environment variable value
    this.http.post(environment.apiUrl+'?method=loginUser&username='+this.username+'&password='+this.password+' ','').subscribe((res: any) => {
       if (res.status == 'not in system') {
         this.notExistEmail();
       }
       if (res.msg=='User Name required!') {
         this.emailAlert();
       } else if (res.msg == 'Password required!') {
         this.passAlert();
       }
      if (res.Response.status == 'Success') {
        var user_id =res.Response.user_id;
        localStorage.setItem('user_id', user_id);
        this.successAlert();
      }   
    });
  }
forgetPage(){
  this.router.navigateByUrl('forgot-password')
}
  settingsPage() {
    this.router.navigateByUrl('settings');
  }
  nextpage(){
    console.log("ShowMainpage");
    this.router.navigateByUrl('signup')
  }
}
