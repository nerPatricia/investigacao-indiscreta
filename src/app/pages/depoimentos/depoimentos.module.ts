import { DepoimentosPage } from './depoimentos.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { LoadingService } from 'src/app/service/loading.service';

const routes: Routes = [
  {
    path: '',
    component: DepoimentosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppHeaderModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoadingService],
  declarations: [DepoimentosPage]
})
export class DepoimentosPageModule {}
