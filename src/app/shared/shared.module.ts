import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import { CorDirective } from './cor.directive';
import { MultiplicarPipe } from './multiplicar.pipe';
import { ParesPipe } from './pares.pipe';
import { FiltroPipe } from './filtro.pipe';
import { MascaraPipe } from './mascara.pipe';
import { FooterComponent } from './directive/footer/footer.component';
import { NgContentMenuComponent } from './ng-content/ng-content-menu/ng-content-menu.component';
import { MascaraDirective } from './directive/mascara/mascara.directive';
import { ValidarsenhaDirective } from './directive/validarsenha/validarsenha.directive';

@NgModule({
  declarations: [CorDirective, MultiplicarPipe, ParesPipe, FiltroPipe, MascaraPipe, FooterComponent, NgContentMenuComponent, MascaraDirective, ValidarsenhaDirective],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    CorDirective,
    MultiplicarPipe,
    ParesPipe,
    FiltroPipe,
    MascaraPipe,
    FooterComponent,
    NgContentMenuComponent,
    MascaraDirective,
    ValidarsenhaDirective
  ]
})
export class SharedModule { }
