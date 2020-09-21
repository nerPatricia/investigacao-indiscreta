import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-depoimentos',
  templateUrl: 'depoimentos.page.html',
  styleUrls: ['depoimentos.page.scss'],
})
export class DepoimentosPage {
  constructor(private navCtrl: NavController) {}

  avancar() {
    this.navCtrl.navigateRoot(['logica-george']);
  }
}
