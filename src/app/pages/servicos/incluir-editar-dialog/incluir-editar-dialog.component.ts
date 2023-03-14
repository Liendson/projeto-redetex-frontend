import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import LabelDropdown from 'app/shared/utils/classes/label-dropdown.class';
import { ServicosService } from 'app/services/servicos.service';

@Component({
  templateUrl: './incluir-editar-dialog.component.html',
  styleUrls: ['./incluir-editar-dialog.component.css']
})
export class IncluirEditarDialogComponent implements OnInit {

  public orcamento: any;
  public formulario: FormGroup;

  public formasDePagamento: Array<LabelDropdown> = [
    new LabelDropdown("Dinheiro", 1),
    new LabelDropdown("Cartão de Crédito", 2),
    new LabelDropdown("Cartão de Débito", 3),
    new LabelDropdown("PIX", 4),
    new LabelDropdown("Transferência Bancária", 5)
  ];
  public tiposDeProdutos: Array<LabelDropdown> = [
    new LabelDropdown("Rede de Proteção", 1),
    new LabelDropdown("Persiana", 2),
    new LabelDropdown("Cortina", 3),
    new LabelDropdown("Varal", 4),
    new LabelDropdown("Tela Mosquiteira", 5),
    new LabelDropdown("Película Adesiva", 6)
  ];
  public tiposDeGancho: Array<LabelDropdown> = [
    new LabelDropdown("Zincado", 1),
    new LabelDropdown("Inox", 2)
  ];
  public coresDeRede: Array<LabelDropdown> = [
    new LabelDropdown("Preta", 1),
    new LabelDropdown("Branca", 2),
    new LabelDropdown("Marrom", 3)
  ];
  public tamanhosDeMalha: Array<LabelDropdown> = [
    new LabelDropdown("3x3", 1),
    new LabelDropdown("5x5", 2),
    new LabelDropdown("10x10", 3)
  ];
  public tiposDeTecido: Array<LabelDropdown> = [
    new LabelDropdown("Tipo1", 1),
    new LabelDropdown("Tipo2", 2)
  ];
  public temBandoOpcoes: Array<LabelDropdown> = [
    new LabelDropdown("Sim", 1),
    new LabelDropdown("Não", 2)
  ];
  public tiposDePersiana: Array<LabelDropdown> = [
    new LabelDropdown("Vertical", 1),
    new LabelDropdown("Horizontal", 2),
    new LabelDropdown("Rolô", 3),
    new LabelDropdown("Painel", 4)
  ];
  public tiposDeCortina: Array<LabelDropdown> = [
    new LabelDropdown("Dupla", 1),
    new LabelDropdown("Simples", 2)
  ];
  public modelosDeTecido: Array<LabelDropdown> = [
    new LabelDropdown("Modelo1", 1),
    new LabelDropdown("Modelo2", 2)
  ];
  public tiposDeTrilho: Array<LabelDropdown> = [
    new LabelDropdown("Prega", 1),
    new LabelDropdown("Ilhós", 2)
  ];
  public tiposDeVaral: Array<LabelDropdown> = [
    new LabelDropdown("Teto", 1),
    new LabelDropdown("Parede", 2)
  ];
  public coresDeAluminio: Array<LabelDropdown> = [
    new LabelDropdown("Branco", 1),
    new LabelDropdown("Natural", 2),
    new LabelDropdown("Bronze", 3),
    new LabelDropdown("Preto", 4)
  ];
  public tiposDeTela: Array<LabelDropdown> = [
    new LabelDropdown("Fixa", 1),
    new LabelDropdown("De Correr", 2),
    new LabelDropdown("De Sobrepor", 3),
    new LabelDropdown("De Encaixe", 4)
  ];
  public coresDePelicula: Array<LabelDropdown> = [
    new LabelDropdown("Jateada", 1),
    new LabelDropdown("BlackOut", 2),
    new LabelDropdown("Fumê", 3)
  ];

  get tipoDoProduto() { return this.formulario.get('tipoDoProduto').value }

  constructor(
    public dialog: DynamicDialogRef,
    public config: DynamicDialogConfig,
    public formBuilder: FormBuilder,
    public servicoService: ServicosService
  ) { }

  ngOnInit(): void {
    this.orcamento = this.config.data;
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nomeDoCliente: [null, Validators.required],
      enderecoDoCliente: [null, Validators.required],
      telefoneDoCliente: [null, Validators.required],
      cpfDoCliente: [null, Validators.required],
      observacaoAdicional: [null],
      valorCobrado: [null, Validators.required],
      formaDePagamento: [null, Validators.required],
      diaHoraServico: [null, Validators.required],
      tipoDoProduto: [1, Validators.required],
      largura: [null, Validators.required],
      altura: [null, Validators.required],
      // Rede
      tipoDoGancho: [1, Validators.required],
      corDaRede: [1, Validators.required],
      tamanhoDaMalha: [1, Validators.required],
      // Persiana
      tipoDoTecido: [1, Validators.required],
      temBando: [false, Validators.required],
      tipoDaPersiana: [1, Validators.required],
      // Cortina
      tipoDaCortina: [1, Validators.required],
      modeloDoTecido: [1, Validators.required],
      tipoDoTrilho: [1, Validators.required],
      // Varal e Tela Mosquiteira
      tipoDoVaral: [1, Validators.required],
      tipoDaTela: [1, Validators.required],
      quantidadeDeVaretas: [null, Validators.required],
      corDoAluminio: [1, Validators.required],
      // Película Adesiva
      corDaPelicula: [1, Validators.required]
    })
  }

  salvar() {
    this.servicoService.salvarServico({"this.formulario":""}).subscribe((data) => {
      console.log(data)
    })
  }

  limparFormulario() { this.formulario.reset() }
	close() { this.dialog.close(); }

}
