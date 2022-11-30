import { Entrada } from 'src/app/shared/interaces/entrada';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EntradaService {

  constructor(private httpClient: HttpClient) { }

  public recuperarEntradas(): Observable<any> {

    return this.httpClient.get<any>('assets/json/entradas.json');
  }
  public recuperarEntrada(id: number): Observable<any> {

    return this.httpClient.get<any[]>('assets/json/entradas.json').pipe(
      map((entradas: any[]) => {

          let entrada = {
            id: 0,
            autor: '',
            fecha: '',
            body: '',
            title: '',
            userId: 0
          };

          entradas.forEach( (entradaListado) => {
            if (entradaListado.id == id) {
              entrada = entradaListado;
            }
          })

          return entrada;
        }
      )
    );
  }

  public editarEntrada(entrada: Entrada): Observable<any> {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.httpClient.post<any>('https://jsonplaceholder.typicode.com/posts', entrada, { headers });
  }
}
