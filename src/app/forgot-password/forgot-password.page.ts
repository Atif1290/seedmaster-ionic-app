import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  form: FormGroup;
  email = '';
  constructor(private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required] // Initialize the field with an empty string
    });
  }
  ngOnInit() {
  }
  settingsPage(){
    this.router.navigateByUrl('settings');
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Your password has been sent to your email address',
      cssClass: 'alert-center',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async reqAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Please Enter Email',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async errAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'Error occur while send you password.Or there is some pronlem with your smtp server',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async emailNotExistAlert() {
    const alert = await this.alertController.create({
      header: 'Warning',
      message: 'The email address you provided does not exist in our system. Make sure the spelling is correct, or try registering a new account.',
      cssClass: 'warning-alert',
      buttons: ['OK'],
    });
    await alert.present();
  }
  
    onClick() {
      var data = '&email=' + this.email;
      this.http.post(environment.apiUrl + '?method=forgetPassword' + data, '').subscribe((res: any) => {
        console.log(res);
        if (res.msg == 'Email Required!') {
          this.reqAlert();
        } else if (res.status =='Success'){
          this.successAlert();
        } else if (res.status =='Error'){
          this.errAlert();
        } else if (res.email_not =='email_not_exist' ){
          this.emailNotExistAlert();
        }

      });
    }
  nextpage() {
    this.router.navigateByUrl('login')
  }
  forgetPage() {
    this.router.navigateByUrl('forgot-password')
  }
}

