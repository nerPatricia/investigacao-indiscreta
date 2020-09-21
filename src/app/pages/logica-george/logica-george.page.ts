import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import swal from 'sweetalert2';

@Component({
  selector: 'app-logica-george',
  templateUrl: 'logica-george.page.html',
  styleUrls: ['logica-george.page.scss'],
})
export class LogicaGeorgePage implements OnInit {
  frases = [
    'Se a jóia é roubada, ela não tem selo de autencidade',
    'Se ele busca algo para a coleção, então ele é um colecionador',
    'Se ele é um colecionador, então ele precisa do selo de autenticidade',
    'Ele veio buscar algo pra coleção'
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

  ngOnInit() {
    swal.fire('Resolva o caso', 'Arraste as frases na ordem correta de acordo com a formula lógica e chegue a solução do caso!');
  }

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


// Geolocation
// NativeGeocoder
// QRScanner
// Leaflet
// angular-jwt
}
