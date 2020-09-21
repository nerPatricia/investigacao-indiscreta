import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import swal from 'sweetalert2';

@Component({
  selector: 'app-logica-mary',
  templateUrl: 'logica-mary.page.html',
  styleUrls: ['logica-mary.page.scss'],
})
export class LogicaMaryPage implements OnInit {
  frases = [
    'Se alguém fica muito na loja, então sabe das câmeras',
    'Se alguém sabe onde ficam as câmeras então pode desviar delas',
    'O cliente não ficou muito tempo na loja',
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
    this.navCtrl.navigateRoot(['logica-joanne']);
  }
}
