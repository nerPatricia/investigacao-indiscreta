import { DragDropModule } from '@angular/cdk/drag-drop';
import { LogicaMaryPage } from './logica-mary.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from '@angular/router';
import { AppHeaderModule } from 'src/app/components/app-header/app-header.module';
import { LoadingService } from 'src/app/service/loading.service';

const routes: Routes = [
  {
    path: '',
    component: LogicaMaryPage
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
  declarations: [LogicaMaryPage]
})
export class LogicaMaryPageModule {}
