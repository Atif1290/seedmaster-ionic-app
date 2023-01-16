import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
//how to write css 
export class ChangePasswordPage  {

  form: FormGroup;
  old_password = '';
  new_password = ''; 
  constructor(private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      username: ['', Validators.required], // Initialize the field with an empty string
      password: ['', Validators.required] // Initialize the field with an empty string

    });
   }
  ngOnInit() {
  }
  settingsPage() {
    this.router.navigateByUrl('settings');
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Password Changed Successfully!',
      cssClass: 'alert-center',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            this.router.navigateByUrl('personal-info');
          }
        }
      ]
    });
    await alert.present();
  }
  async incorrectPassAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Old password is incorrect',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async oldPassAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter Old Password',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
  async newPassAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Enter New Password',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async performLongOperation() {
    this.showLoading();
  }
  async showLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();
  }
async dismissLoading() {
  await this.loadingController.dismiss();
  
}
  onClick() {
    let user_id = localStorage.getItem('user_id');
   
    var data = '&user_id='+ user_id +'&old_password=' + this.old_password + '&new_password=' + this.new_password;
    this.http.post(environment.apiUrl+'?method=changePassword'+data, '').subscribe((res: any) => {
    console.log(res.msg);  
      if (res.msg == 'Password Successfully Changed') {
        this.successAlert();
        // this.performLongOperation();
        // setTimeout(async () => {
        //   await this.dismissLoading();
        //   this.successAlert();
        // }, 3000);
        //redirect to login page 
       }else if (res.msg =='Old password is incorrect!'){
        this.incorrectPassAlert();
      } else if (res.msg =='Old Password Required!'){
        this.oldPassAlert();
      } else if (res.msg == 'New Password Required!') {
        this.newPassAlert();
      }
      

    });
  }
}
