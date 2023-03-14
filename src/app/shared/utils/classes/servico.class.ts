export default class Servico {
  public nomeDoCliente: string;
  public enderecoDoCliente: string;
  public telefoneDoCliente: string;
  public cpfDoCliente?: string;
  public observacaoAdicional?: string;
  public tipoDoProduto: number;
  public largura: number;
  public altura: number;
  public formaDePagamento: number;
  public dataHoraServico: Date;
  public valorCobrado: number;
  public situacao: number;
  // Rede
  public tipoDoGancho?: number;
  public corDaRede?: number;
  public tamanhoDaMalha?: number;
  // Persiana
  public tipoDaPersiana?: number;
  public tipoDoTecido?: number;
  public temBando?: boolean;
  // Cortina
  public tipoDaCortina?: number;
  public modeloDoTecido?: number;
  public tipoDoTrilho?: number;
  // Varal
  public tipoDoVaral?: number;
  public quantidadeDeVaretas?: number;
  public corDoAluminio?: number;
  // Tela Mosquiteira
  public tipoDaTela?: number;
  // Pelicula Adesiva
  public corDaPelicula?: number;

  constructor() {}
}