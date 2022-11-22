import { TokenService } from './../shared/services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public miToken: number;
  public nombreUsuario: string | null;
  public mydate: number;

  constructor(private TokenService: TokenService) {
    this.miToken = 0;
    this.nombreUsuario = "";
    this.nombreUsuario = localStorage.getItem('nombreUsuario');
    this.mydate = Date.now();
  }

  ngOnInit(): void {


    this.TokenService.token$.subscribe(
      (token: number) => {
        this.miToken = token;
      }
    )

  }

  public logout(): void {
    if (localStorage.getItem('miTokenPersonal')) {
      localStorage.removeItem('miTokenPersonal');
    }
  }

}
