import { Component, OnInit } from '@angular/core';
import { Contato } from './../models/contato';
import { ContatoService } from './../services/contato.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  contatos: Contato[] = [];

  constructor(private contatoService: ContatoService) { }

  ngOnInit(): void {
      this.contatoService.getContatos()
          .then(contatos => this.contatos = contatos.slice(0, 4));
  }
}
