import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import {PacienteRoutingModule} from './paciente-routing.module';
import {SharedModule} from '../shared/shared.module';
import { EditarComponent } from './components/editar/editar.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [ListarComponent, EditarComponent],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule,
    ReactiveFormsModule
  ]
})
export class PacienteModule { }
