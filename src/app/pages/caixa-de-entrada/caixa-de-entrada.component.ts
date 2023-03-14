import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { IncluirEditarDialogComponent } from '../servicos/incluir-editar-dialog/incluir-editar-dialog.component';
import { VisualizarDialogComponent } from '../servicos/visualizar-dialog/visualizar-dialog.component';

@Component({
  selector: 'dashboard-cmp',
  templateUrl: 'caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})

export class CaixaDeEntradaComponent implements OnInit {

  constructor(public dialogService: DialogService) { }

  public servicos = {
    segunda: [{
      nomeDoCliente: "Liendson Douglas",
      enderecoDoCliente: "Rua Laura Quirino Nunes da Silva",
      dataHoraProcedimento: new Date(),
      tipoDoProcedimento: "Rede de Proteção",
      procedimento: 1
    }],
    terca: [{
      nomeDoCliente: "Liendson Douglas",
      enderecoDoCliente: "Rua Laura Quirino Nunes da Silva",
      dataHoraProcedimento: new Date(),
      tipoDoProcedimento: "Rede de Proteção",
      procedimento: 2,
    }],
    quarta: [{
      nomeDoCliente: "Liendson Douglas",
      enderecoDoCliente: "Rua Laura Quirino Nunes da Silva",
      dataHoraProcedimento: new Date(),
      tipoDoProcedimento: "Rede de Proteção",
      procedimento: 1
    }],
    quinta: [{
      nomeDoCliente: "Liendson Douglas",
      enderecoDoCliente: "Rua Laura Quirino Nunes da Silva",
      dataHoraProcedimento: new Date(),
      tipoDoProcedimento: "Rede de Proteção",
      procedimento: 2
    }],
    sexta: [{
      nomeDoCliente: "Liendson Douglas",
      enderecoDoCliente: "Rua Laura Quirino Nunes da Silva",
      dataHoraProcedimento: new Date(),
      tipoDoProcedimento: "Rede de Proteção",
      procedimento: 2
    }]
  };

  ngOnInit() {}
   
	drop(event: CdkDragDrop<string[]>) {
		event.previousContainer === event.container
      ? moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
      : transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
	}

  openDialog(tipo) {
    const dialogParams = {
      header: `${tipo == 1 ? 'Visualizar' : 'Editar'} Orçamento`,
      width: '70%'
    }
    return tipo == 1
      ? this.dialogService.open(VisualizarDialogComponent, dialogParams)
      : this.dialogService.open(IncluirEditarDialogComponent, dialogParams)
  }
}
