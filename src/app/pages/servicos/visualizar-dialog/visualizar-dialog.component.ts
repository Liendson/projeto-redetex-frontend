import { Component, OnInit } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  templateUrl: './visualizar-dialog.component.html',
  styleUrls: ['./visualizar-dialog.component.css']
})
export class VisualizarDialogComponent implements OnInit {

  public servico: any;

  constructor(
    public dialog: DynamicDialogRef,
    public config: DynamicDialogConfig
  ) { }

  ngOnInit(): void {
    this.servico = this.config.data;
  }

  close() {
    this.dialog.close();
  }

}
