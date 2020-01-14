import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './components/listar/listar.component';
import {PacienteRoutingModule} from './paciente-routing.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    SharedModule,
    PacienteRoutingModule
  ]
})
export class PacienteModule { }
