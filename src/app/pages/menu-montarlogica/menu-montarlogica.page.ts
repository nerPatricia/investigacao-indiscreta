import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu-montarlogica',
  templateUrl: 'menu-montarlogica.page.html',
  styleUrls: ['menu-montarlogica.page.scss'],
})
export class MenuMontarlogicaPage {
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

  montarLogica(nome) {}
}
