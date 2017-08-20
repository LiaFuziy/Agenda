import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Contato } from '../models/contato';
import { ContatoService } from '../services/contato.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css'],
  providers: [ContatoService]
})
export class ContatosComponent implements OnInit {
  selectedContato: Contato;
  contatos: Contato[];

  constructor(private contatoService: ContatoService, private router: Router) {  }
  ngOnInit(): void {
    this.getContatos();
  }
  getContatos(): void {
    this.contatoService.getContatos().then(contatos =>
      this.contatos = contatos);
  }
  onSelect(contato: Contato): void {
    this.selectedContato = contato;
  }
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedContato.id]);
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
  delete(contato: Contato): void {
    this.contatoService
        .delete(contato.id)
        .then(() => {
            this.contatos = this.contatos.filter(h => h !== contato);
            if (this.selectedContato === contato) { this.selectedContato = null; }
        });
  }
}
