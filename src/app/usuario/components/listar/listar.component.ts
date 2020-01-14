import {Component, OnDestroy, OnInit} from '@angular/core';
import {Usuario} from '../../model/usuario';
import {UsuarioService} from '../../service/usuario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  public usuarios: Usuario[];
  colunas: string[] = ['login', 'password', 'acoes'];

  constructor(private usuarioService: UsuarioService, private router: Router) {
  }

  ngOnInit() {
    this.listar();
  }

  listar(): void {
    this.usuarioService.listar()
      .subscribe(usuarios => {
        this.usuarios = usuarios;
      });
  }

  editar({id}: Usuario): void {
    this.router.navigate(['editar', id]);
  }

  remover({id}: Usuario): void {
    this.usuarioService.remover(id).subscribe(() => this.listar());
  }


}
