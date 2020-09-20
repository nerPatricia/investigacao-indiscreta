import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'introducao',
    loadChildren: () =>
      import('./pages/introducao/introducao.module').then(m => m.IntroducaoPageModule)
  },
  {
    path: 'descricao-envolvidos',
    loadChildren: () =>
      import('./pages/descricao-envolvidos/descricao-envolvidos.module').then(m => m.DescricaoEnvolvidosPageModule)
  },
  {
    path: 'menu-montarlogica',
    loadChildren: () =>
      import('./pages/menu-montarlogica/menu-montarlogica.module').then(m => m.MenuMontarlogicaPageModule)
  },
  {
    path: 'logica-ralph',
    loadChildren: () =>
      import('./pages/logica-ralph/logica-ralph.module').then(m => m.LogicaRalphPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
