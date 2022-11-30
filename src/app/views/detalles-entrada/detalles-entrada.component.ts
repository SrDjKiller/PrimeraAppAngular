import { EntradaService } from './../../shared/services/entrada.service';
import { Entrada } from './../../shared/interaces/entrada';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalles-entrada',
  templateUrl: './detalles-entrada.component.html',
  styleUrls: ['./detalles-entrada.component.css']
})
export class DetallesEntradaComponent implements OnInit {

  public id: number;
  public entrada: any;


  constructor(private activatedRoute: ActivatedRoute, private entradaService: EntradaService) {
      this.id = 0;
      this.entrada = {
        id: 0,
        title: '',
        body: '',
        autor: '',
        fecha: 0,
        userId: 0
      };
      this.activatedRoute.params.subscribe( paramsUrl => {
        this.id = +paramsUrl['id'];
      });
   }


  ngOnInit(): void {
    this.recuperarEntrada();

  }

  private recuperarEntrada(): void {
    this.entradaService.recuperarEntrada(this.id).subscribe(
      (data: any) => {
        this.entrada = data;
      }
    )
  }

}
