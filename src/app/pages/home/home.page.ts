import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  comecar() {
    // const navigationExtras: NavigationExtras = {
    //   state: { event }
    // };
    // this.router.navigate(['event-detail'], navigationExtras);
    this.navCtrl.navigateRoot(['introducao']);
  }
}
