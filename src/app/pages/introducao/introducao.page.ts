import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-introducao',
  templateUrl: 'introducao.page.html',
  styleUrls: ['introducao.page.scss'],
})
export class IntroducaoPage {
  constructor(private navCtrl: NavController) {}

  avancar() {
    this.navCtrl.navigateRoot(['descricao-envolvidos']);
  }
}
