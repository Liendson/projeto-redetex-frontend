import swal from 'sweetalert';

export class Alert {
  static exibirSucesso(titulo: string, mensagem: string) {
    return swal({
      title: titulo,
      text: mensagem,
      icon: "success",
    });
  }

  static exibirErro(titulo: string, mensagem: string) {
    return swal({
      title: titulo,
      text: mensagem,
      icon: "error",
    });
  }

  static exibirAlerta(titulo: string, mensagem: string) {
    return swal({
      title: titulo,
      text: mensagem,
      icon: "warning",
    });
  }
}