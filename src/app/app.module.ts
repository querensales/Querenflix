import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCatalogoComponent } from './tela-catalogo/tela-catalogo.component';
import { MenuNavegacaoComponent } from './menu/menu-navegacao/menu-navegacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCatalogoComponent,
    MenuNavegacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
