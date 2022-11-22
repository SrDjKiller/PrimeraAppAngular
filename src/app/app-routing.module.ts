import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { FrontComponent } from './views/front/front.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeNosotrosComponent } from './views/acerca-de-nosotros/acerca-de-nosotros.component';
import { ListadoComponent } from './views/listado/listado.component';
import { LoginComponent } from './views/login/login.component';
import { PaginaNoEncontradaComponent } from './views/pagina-no-encontrada/pagina-no-encontrada.component';
import { DetallesEntradaComponent } from './views/detalles-entrada/detalles-entrada.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'front', component: FrontComponent, children: [
    { path: 'listado', component: ListadoComponent },
    { path: 'nosotros', component: AcercaDeNosotrosComponent },
    { path: 'detalles-entrada/:id', component: DetallesEntradaComponent},
  ]},
  { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import('src/app/views/dashboard/dashboard.module').then((module) => module.DashboardModule)},

  { path: '', redirectTo: 'front/listado', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
