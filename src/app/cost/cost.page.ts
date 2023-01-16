import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-cost',
  templateUrl: './cost.page.html',
  styleUrls: ['./cost.page.scss'],
})
export class CostPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }

  settingsPage() {
    this.router.navigateByUrl('settings');
  }

  costprofit(){
    console.log("ShowMainpage");
    this.router.navigateByUrl('cost-profit')
  }

}
