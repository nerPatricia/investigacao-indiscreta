import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-logica-joanne',
  templateUrl: 'logica-joanne.page.html',
  styleUrls: ['logica-joanne.page.scss'],
})
export class LogicaJoannePage implements OnInit {
  frases = [
    'A atendente não possuía chaves do depósito',
    'Se uma porta não foi arrombada, então ela foi aberta por uma chave',
    'Se uma porta foi aberta por uma chave, então o ladrão possuía uma chave',
  ];
  resultados = [];
  subsResultados: Observable<any[]>;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.event = this.router.getCurrentNavigation().extras.state.event;
    //   }
    // });
  }

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
    this.navCtrl.navigateRoot(['logica-ralph']);
  }
}
