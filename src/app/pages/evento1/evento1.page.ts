import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-evento1',
  templateUrl: 'evento1.page.html',
  styleUrls: ['evento1.page.scss'],
})
export class Evento1Page {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

    // this.route.queryParams.subscribe(params => {
    //   if (this.router.getCurrentNavigation().extras.state) {
    //     this.event = this.router.getCurrentNavigation().extras.state.event;
    //   }
    // });
}
