import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCatalogoComponent } from './tela-catalogo/tela-catalogo.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  {
    path: '',
    component: TelaLoginComponent
  },
  {
    path: 'catalogo',
    component: TelaCatalogoComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
