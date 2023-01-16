import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.page.html',
  styleUrls: ['./calculate.page.scss'],
})
export class CalculatePage implements OnInit {
  items: any;
  meters: any;
  slideOpts = {
    speed: 400
  };
 
  constructor(private http: HttpClient, private router: Router) {

  }
  nextpage() {
    console.log("ShowMainpage");
    this.router.navigateByUrl('settings')
  }
  getData() {
    return this.http.get(environment.apiUrl + '?method=getProductType')
      .pipe(map(data => data));
  }
  getMeterTypes(){
    return this.http.get(environment.apiUrl + '?method=getMeterType')
      .pipe(map(data => data));
  }
  ngOnInit() {
    this.getData().subscribe(data => {
      console.log(data);
      this.items= data.valueOf();
      //console.log("this"+this.items);
    });
    this.getMeterTypes().subscribe(data => {
      console.log(data);
      this.meters= data.valueOf();
      //console.log("this"+this.items);
    });
  }

}
