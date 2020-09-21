import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-logica-ralph',
  templateUrl: 'logica-ralph.page.html',
  styleUrls: ['logica-ralph.page.scss'],
})
export class LogicaRalphPage implements OnInit {
  frases = [
    'O patrão não conferiu o depósito ou ele não tinha ligado para a polícia ainda',
    'Ele já tinha ligado pra polícia'
  ];
  resultados = [];
  subsResultados: Observable<any[]>;

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>, index?) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousIndex === 0 && event.currentIndex === 0) {
        this.resultados[index] = '';
      } else {
        this.resultados[index] = event.previousContainer.data[event.previousIndex];
      }
    }
  }

  avancar() {
    this.navCtrl.navigateRoot(['/']);
  }
}
