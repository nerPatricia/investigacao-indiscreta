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
    path: 'depoimentos',
    loadChildren: () =>
      import('./pages/depoimentos/depoimentos.module').then(m => m.DepoimentosPageModule)
  },
  {
    path: 'logica-george',
    loadChildren: () =>
      import('./pages/logica-george/logica-george.module').then(m => m.LogicaGeorgePageModule)
  },
  {
    path: 'logica-mary',
    loadChildren: () =>
      import('./pages/logica-mary/logica-mary.module').then(m => m.LogicaMaryPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
