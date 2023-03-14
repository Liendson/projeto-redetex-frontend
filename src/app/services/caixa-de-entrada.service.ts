import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class CaixaDeEntradaService {

  public urlController = '/caixa-de-entrada'

  constructor(private baseService: BaseService) { }

  buscarTodosServicos(servico) {
    return this.baseService.post(`${this.urlController}`, servico)
  }

}
