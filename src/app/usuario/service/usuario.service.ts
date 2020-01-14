import {Injectable} from '@angular/core';
import {BaseApiService} from '../../shared/base-api.service';
import {Usuario} from '../model/usuario';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends BaseApiService<Usuario> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'usuarios');
  }
}
