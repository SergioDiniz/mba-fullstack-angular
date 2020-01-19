import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditarComponent} from './components/editar/editar.component';

import {ListarComponent} from './components/listar/listar.component';

const routes: Routes = [
  {
    path: ''
    , component: ListarComponent
  },
  {
    path: 'editar/:id'
    , component: EditarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule {
}
