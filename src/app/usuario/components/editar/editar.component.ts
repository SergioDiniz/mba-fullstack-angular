import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Usuario} from "../../model/usuario";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  usuario: Usuario;
  titulo: string;
  confirmPassword: string;

  constructor(private router: Router) {
    this.usuario = new Usuario();
    this.titulo = 'Cadastrar Usuario';
    this.confirmPassword = '';
  }

  ngOnInit() {
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(form): void {
    console.log(form)
    if (form.form.valid) {
      alert('Formlario valido.');
    }
    console.log(this.usuario);
  }

}
