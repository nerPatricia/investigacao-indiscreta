import { DragDropModule } from '@angular/cdk/drag-drop';
import { Evento2Page } from './evento2.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { LoadingService } from 'src/app/service/loading.service';

const routes: Routes = [
  {
    path: '',
    component: Evento2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    AppHeaderModule,
    DragDropModule,
    RouterModule.forChild(routes)
  ],
  providers: [LoadingService],
  declarations: [Evento2Page]
})
export class Evento2PageModule {}
