import { EntradaService } from 'src/app/shared/services/entrada.service';
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interaces/entrada';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public listadoEntradas: Entrada[];
  public nombreColumnas: Array<string>;

  constructor(private entradaService: EntradaService) {
    this.listadoEntradas = []
    this.nombreColumnas = ['id','titulo','autor','fecha']
  }

  ngOnInit(): void {
    this.listarEntradas();
  }

  private listarEntradas(): void {
    this.entradaService.recuperarEntradas().subscribe(
      (entradas: Entrada[]) => {
        this.listadoEntradas = [...entradas];
      }
    )
  }
}
