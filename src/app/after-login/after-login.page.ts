import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { Storage } from '@ionic/storage';
//private storage: Storage,
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.page.html',
  styleUrls: ['./after-login.page.scss'],
})
export class AfterLoginPage implements OnInit {
  constructor(private http: HttpClient, private alertController: AlertController, public loadingController: LoadingController, private router: Router) {
  }
  ngOnInit() {
    console.log("setting page");
  }
  updateProfile() {
    console.log("ShowMainpage");
    let user_id = localStorage.getItem('user_id');
    console.log(user_id);
    this.router.navigateByUrl('personal-info')
  }
  settingsPage() { 
    this.router.navigateByUrl('settings');
  }
    logOut(){
    console.log("ShowMainpage");
    //remove user id from local storage and then redirect 
    localStorage.setItem('user_id', '');
    this.router.navigateByUrl('login');

  }
  changePass() {
    console.log("ShowMainpage");
    this.router.navigateByUrl('change-password')
  }


}
