import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})   

export class SignupPage {
  form: FormGroup;
  email ='';
  password = '';
  first_name = '';
  last_name = '';
  phone = '';
  address1 = '';
  address2 = '';
  city = '';
  state = '';
  zip_code = '';
  province = '';
  device_id='';
    constructor(private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router, private formBuilder: FormBuilder) {

  
    this.form= this.formBuilder.group({
      email: ['', Validators.required], // Initialize the field with an empty string
      password: ['', Validators.required], // Initialize the field with an empty string
      first_name: ['', Validators.required], // Initialize the field with an empty string
      last_name: ['', Validators.required], // Initialize the field with an empty string
      phone: ['', Validators.required], // Initialize the field with an empty string
      address1: ['', Validators.required], // Initialize the field with an empty string
      address2: ['', Validators.required], // Initialize the field with an empty string
      city: ['', Validators.required], // Initialize the field with an empty string
      state: ['', Validators.required], // Initialize the field with an empty string
      zip_code: ['', Validators.required], // Initialize the field with an empty string
      province: ['', Validators.required], // Initialize the field with an empty string
    });
  }
  async emailAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Email Already Exits!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async passwordAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Password Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async emailReqAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Email Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async fnameAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'First Name is Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async lnameAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Last Name is Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async phoneAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Phone is Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async addressAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Address 1 is Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async cityAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'City is Required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async fieldRequired() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Field is required!',
      buttons: ['OK'],
    });
    await alert.present();
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'User Created Successfully!',
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
      onClick() {
        var data = '&email='+this.email+'&password='+this.password+'&first_name='+this.first_name+'&last_name='+this.last_name+'&phone='+this.phone+'&address='+this.address1+'&address2='+this.address2+'&city='+this.city+'&province='+this.province+'&zip_code='+this.zip_code+'&device_id='+this.device_id;
        this.http.post(environment.apiUrl+'?method=createUser'+data,'').subscribe((res: any) => {
          //console success or error message
          console.log("message" + res.msg);
          if (res.msg == 'Email Exits!') {
          this.emailAlert();
          }else  if (res.msg == 'Password Required!') {
          this.passwordAlert();
          } else if (res.msg == 'Email Required!') {
          this.emailReqAlert();
          } else if (res.msg =='First Name Required!'){
          this.fnameAlert();
          } else if (res.msg =='Last Name Required!'){
          this.lnameAlert();
          } else if (res.msg =='phone Required!'){
          this.phoneAlert();
          } else if (res.msg == 'Address Required!') {
          this.addressAlert();
          } else if (res.msg == 'City Required!') {
          this.cityAlert();
        } else{
          this.successAlert();
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

