import { Component, OnInit, NgModule, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
  @Injectable({
    providedIn: 'root'
  })
export class PersonalInfoPage implements OnInit {
  profileForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl('')
  });

  email = '';
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
  device_id = '';
  //storageId = 'userProfile';
  form: FormGroup;
  constructor(private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router, private formBuilder: FormBuilder) {
    let user_id = localStorage.getItem('user_id');

    this.form = this.formBuilder.group({
      fname: ['', Validators.required] // Initialize the field with an empty string
      });
  }
  async successAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Profile  Successfully Changed!',
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
  ngOnInit() {
    let user_id = localStorage.getItem('user_id');
    this.http.get(environment.apiUrl+'?method=showProfileByUserID&user_id='+user_id +' ').subscribe(data => {
      this.setProfileData(data);
      console.log(data);

    });
  }
  setProfileData(data: any) {
    this.first_name = data.first_name;
    this.last_name = data.last_name;
    this.phone = data.phone;
    this.address1 = data.address1;
    this.address2 = data.address2;
    this.city = data.city;
    this.province = data.province;
    this.zip_code = data.zip;
    this.device_id = data.device_id;   
  }
  settingsPage() {
    this.router.navigateByUrl('settings');
  }
  onClick() {
    //localStorage.setItem(this.storageId, JSON.stringify({
    let user_id = localStorage.getItem('user_id');
    var data = '&user_id=' + user_id + '&email=' + this.email + '&password=' + this.password + '&first_name=' + this.first_name + '&last_name=' + this.last_name + '&phone=' + this.phone + '&address1=' + this.address1 + '&address2=' + this.address2 + '&city=' + this.city + '&province=' + this.province + '&zip_code=' + this.zip_code + '&device_id=' + this.device_id;
    this.http.post(environment.apiUrl+'?method=updateProfile' + data, '').subscribe((res: any) => {
      console.log(res);
      if (res.status == 'Success') {
        //show alert
        this.successAlert();
      }
      else {
        this.router.navigate(['/personal-info']);
      }
    });
  }
}
