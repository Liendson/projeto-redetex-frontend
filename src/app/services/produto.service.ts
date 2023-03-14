import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  public urlController = '/produtos'

  constructor(private baseService: BaseService) { }

  obterTodosProdutosAtivos() {
    return this.baseService.get(`${this.urlController}/obter-todos-produtos-ativos`)
  }

  obterTiposDeTecidoPersiana() {
    return this.baseService.get(`${this.urlController}/obter-tipos-tecido-persiana`)
  }

  obterTiposDeTecidoCortinas() {
    return this.baseService.get(`${this.urlController}/obter-tipos-tecido-cortinas`)
  }

}
