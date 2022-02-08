import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, NavigationExtras, Routes } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioModel } from '../shared/model/usuario.model';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  usuario: UsuarioModel;
  exibirMensagem: boolean = false;

  constructor(private requisicao: HttpClient,
    private modalService: NgbModal) {
    this.usuario = new UsuarioModel();
  }

  ngOnInit(): void {
    if (localStorage.getItem('nome-usuario') != null) {
      window.location.href = '/catalogo';
    }

  }

  logar() {
    if (this.usuario.login == 'querenhsales@gmail.com' &&
      this.usuario.senha == 'Queren001*') {
      localStorage.setItem('nome-usuario', this.usuario.login);
    } else {
      this.exibirMensagem = true;
    }


  }

}
