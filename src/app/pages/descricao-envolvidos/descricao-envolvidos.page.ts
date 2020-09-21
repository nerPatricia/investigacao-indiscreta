import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-descricao-envolvidos',
  templateUrl: 'descricao-envolvidos.page.html',
  styleUrls: ['descricao-envolvidos.page.scss'],
})
export class DescricaoEnvolvidosPage {
  constructor(private navCtrl: NavController) {}

  avancar() {
    this.navCtrl.navigateRoot(['depoimentos']);
  }
}
