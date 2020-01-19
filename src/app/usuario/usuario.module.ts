import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { ListarComponent } from './components/listar/listar.component';
import {SharedModule} from '../shared/shared.module';
import { EditarComponent } from './components/editar/editar.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class UsuarioModule { }
