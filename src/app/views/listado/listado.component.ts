import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Entrada } from 'src/app/shared/interaces/entrada';
import { EntradaService } from './../../shared/services/entrada.service';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoEntradas: any;

  constructor(private entradaService: EntradaService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.recuperarEntradas();
  }

  private recuperarEntradas(): void {

    this.entradaService.recuperarEntradas().subscribe(
      (data) => {
        this.listadoEntradas = data;
      },
      (error) => {

      },
      () => {

      }
    )
  }

  public detalleEntrada(id: number): void{
    this.router.navigate([`front/detalles-entrada/${ id }`]);
  }
}
