import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../model/paciente";


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {
  public pacientes: Paciente[];
  colunas: string[] = ['nome', 'telefone', 'email'];

  constructor() {
  }

  ngOnInit() {
  }

  editar({id}: Paciente): void {
    console.log(id);
  }

  remover({id}: Paciente): void {
    console.log(id);
  }

}
