import { Component, OnInit } from '@angular/core';
import {Paciente} from '../../model/paciente';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PacienteService} from '../../service/paciente.service';
import {Validacoes} from '../../../shared/validacoes';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  paciente: Paciente;
  titulo: string;

  formulario: FormGroup;

  constructor( route: ActivatedRoute,
               private formBuilder: FormBuilder,
               private router: Router,
               private pacienteService: PacienteService) {
    this.paciente = route.snapshot.data.paciente;
    console.log(route.snapshot);
    this.titulo = this.paciente.id ? 'Atualizar Paciente' : 'Cadastrar novo Paciente';
  }

  ngOnInit() {

    this.formulario = this.formBuilder.group({
      nome: [this.paciente.nome, Validators.compose([
        Validators.required,
        Validators.maxLength(70)
      ])],
      email: [this.paciente.email, Validators.compose([
        Validators.required,
        Validacoes.ValidaEmail
      ])],
      cpf: [this.paciente.cpf, Validators.compose([
        Validators.required
      ])],
      telefone: [this.paciente.telefone, Validators.compose([
        Validators.required
      ])],
    });

    this.formulario.valueChanges
      .subscribe((values) => {
        console.log(values);
      });

  }


  get nome() {
    return this.formulario.get('nome');
  }

  get cpf() {
    return this.formulario.get('cpf');
  }

  get telefone() {
    return this.formulario.get('telefone');
  }

  get email() {
    return this.formulario.get('email');
  }

  voltar(): void {
    this.router.navigate(['..']);
  }

  enviar(): void {
    if (this.formulario.valid) {
      this.pacienteService.salvar(this.formulario.value)
        .subscribe(() => this.voltar());
    }
  }

}
