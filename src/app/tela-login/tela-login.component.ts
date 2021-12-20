import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterModule, NavigationExtras, Routes } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {
  login!: string;
  senha!: string;

  closeModal!: string;

  constructor(private requisicao: HttpClient,
    private modalService: NgbModal) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('nome-usuario') != null) {
      window.location.href = '/catalogo';


    }

  }

  logar() {
    let url: string = 'https://localhost:7254/Autenticacao?login=' + this.login + '&senha=' + this.senha;
    this.requisicao.post(url, null).subscribe((usuarioLogado: any) => {
      if (usuarioLogado != null) {
        localStorage.setItem('nome-usuario', usuarioLogado.nome)
        localStorage.setItem('login-usuario', usuarioLogado.login)

        window.location.href = '/catalogo';
      } else {

      }

    })

  }


  triggerModal(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
