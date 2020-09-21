import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-logica-george',
  templateUrl: 'logica-george.page.html',
  styleUrls: ['logica-george.page.scss'],
})
export class LogicaGeorgePage {
  frases = [
    'O patrão não conferiu o depósito ou ele não tinha ligado para a polícia ainda',
    'Ele já tinha ligado pra polícia'
  ];
  resultado;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.event = this.router.getCurrentNavigation().extras.state.event;
    //   }
    // });
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      if (event.previousIndex === 0 && event.currentIndex === 0) {
        this.resultado = '';
      } else {
        this.resultado = event.previousContainer.data[event.previousIndex];
      }
    }
  }

  ionViewDidEnter() {}
}
