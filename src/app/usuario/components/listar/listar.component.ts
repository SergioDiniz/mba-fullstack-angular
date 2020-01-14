import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../model/usuario';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public usuarios: Usuario[];
  colunas: string[] = ['login', 'password'];

  constructor() {
  }

  ngOnInit() {
  }

  editar({id}: Usuario): void {
    console.log(id);
  }

  remover({id}: Usuario): void {
    console.log(id);
  }

}
