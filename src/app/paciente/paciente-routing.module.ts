import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListarComponent} from './components/listar/listar.component';
import {EditarComponent} from './components/editar/editar.component';
import {PacienteResolve} from './service/paciente.resolve';


const routes: Routes = [
  {
    path: '',
    component: ListarComponent,
    // children: [
    //   {
    //     path: 'listar',
    //     component: ...,
    //     children: [
    //       {
    //          path: 'novo',
    //          component: ...,
    //       }
    //     ]
    //   }
    // ]
  },
  {
    component: EditarComponent,
    path: 'novo'
  },
  {
    component: EditarComponent,
    path: 'editar/:id',
    resolve: {
      paciente: PacienteResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
