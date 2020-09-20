import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-descricao-envolvidos',
  templateUrl: 'descricao-envolvidos.page.html',
  styleUrls: ['descricao-envolvidos.page.scss'],
})
export class DescricaoEnvolvidosPage {
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

  avancar() {
    
  }
}
