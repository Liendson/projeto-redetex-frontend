import { Injectable } from '@angular/core';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ServicosService {

  public urlController = '/servicos'

  constructor(private baseService: BaseService) { }

  salvarServico(servico) {
    return this.baseService.post(`${this.urlController}/salvar`, servico)
  }

  listarTodosOsServicos() {
    return this.baseService.get(`${this.urlController}/buscar`)
  }

  detalharServicoPorId(id: string) {
    return this.baseService.get(`${this.urlController}/buscar/${id}`)
  }

  cancelarServicoPorId(id: string) {
    return this.baseService.get(`${this.urlController}/cancelar/${id}`)
  }

  concluirServicoPorId(id: string) {
    return this.baseService.get(`${this.urlController}/concluir/${id}`)
  }
}
