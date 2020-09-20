import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'evento1',
    loadChildren: () =>
      import('./pages/evento1/evento1.module').then(m => m.Evento1PageModule)
  },
  {
    path: 'evento2',
    loadChildren: () =>
      import('./pages/evento2/evento2.module').then(m => m.Evento2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
