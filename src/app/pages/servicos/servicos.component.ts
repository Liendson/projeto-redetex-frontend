import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogService } from 'primeng/dynamicdialog';
import { IncluirEditarDialogComponent } from './incluir-editar-dialog/incluir-editar-dialog.component';
import { VisualizarDialogComponent } from './visualizar-dialog/visualizar-dialog.component';
import { Location } from '@angular/common';
import LabelDropdown from 'app/shared/utils/classes/label-dropdown.class';
import Servico from 'app/shared/utils/classes/servico.class';
import { ServicosService } from 'app/services/servicos.service';

@Component({
	templateUrl: 'servicos.component.html',
	styleUrls: ['./servicos.component.css']
})

export class ServicosComponent implements OnInit {

	public formulario: FormGroup;
	public resultado: Array<Servico> = new Array();

	public tiposDeProdutos: Array<LabelDropdown> = [
    new LabelDropdown("Rede de Proteção", 1),
    new LabelDropdown("Persiana", 2),
    new LabelDropdown("Cortina", 3),
    new LabelDropdown("Varal", 4),
    new LabelDropdown("Tela Mosquiteira", 5),
    new LabelDropdown("Película Adesiva", 6)
  ];

	public situacoes: Array<LabelDropdown> = [
		new LabelDropdown("Pendente", 1),
    new LabelDropdown("Concluído", 2),
		new LabelDropdown("Cancelado", 3)
	]

	constructor(
		public dialogService: DialogService,
		private servicosService: ServicosService,
		public formBuilder: FormBuilder,
		private location: Location
	) { }

	ngOnInit() {
		this.configurarFormulario();
	}

	configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeDoCliente: [null],
			tipoDoProduto: [null],
			situacao: [null],
			dataInicial: [null],
			dataFinal: [null]
    })
  }

	pesquisar() {
		this.servicosService.listarTodosOsServicos().subscribe((data) => {
			console.log(data)
		})
	}

	openDialog(orcamento, tipo) {
    const dialogParams = {
			data: orcamento,
      header: `${tipo == 1 ? 'Visualizar' : tipo == 2 ? 'Editar' : 'Incluir'} Servico`,
      width: '70%'
    }
    return tipo == 1
      ? this.dialogService.open(VisualizarDialogComponent, dialogParams)
      : this.dialogService.open(IncluirEditarDialogComponent, dialogParams)
  }

	limparFormulario() { this.formulario.reset() }
	voltar() { this.location.back() }

}
