import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-introducao',
  templateUrl: 'introducao.page.html',
  styleUrls: ['introducao.page.scss'],
})
export class IntroducaoPage {
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
