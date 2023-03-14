import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent {

  @Input() public orcamento;

  getSeverity() {
    switch(this.orcamento.status) {
      case 1:
        return "warn";
      case 2:
        return "success";
      case 3:
        return "error";
    }
  }

  getText() {
    switch(this.orcamento.status) {
      case 1:
        return "Pendente";
      case 2:
        return "Concluído";
      case 3:
        return "Cancelado";
    }
  }

}
