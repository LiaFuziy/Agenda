import { Router } from '@angular/router';
import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato-create',
  templateUrl: './contato-create.component.html',
  styleUrls: ['./contato-create.component.css']
})
export class ContatoCreateComponent implements OnInit {
  selectedContato: Contato;
  contatos: Contato[];

  constructor(private contatoService: ContatoService, private router: Router) {  }
  ngOnInit(): void {
  }
  add(name: string, email: string, mobile: string): void {
    name = name.trim();
    email = email;
    mobile = mobile;

    if (!name) { return; }
        this.contatoService.create(name, email, mobile)
        .then(contato => {
            this.contatos.push(contato);
            this.selectedContato = null;
        });
  }

}
