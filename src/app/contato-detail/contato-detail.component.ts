import { ContatoService } from './../services/contato.service';
import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { Contato } from './../models/contato';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-contato-detail',
  templateUrl: './contato-detail.component.html',
  styleUrls: ['./contato-detail.component.css']
})
export class ContatoDetailComponent implements OnInit {

  @Input()
  contato: Contato;

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit() {
    this.route.params.switchMap((params: Params) =>
        this.contatoService.getContato(+params['id']))
        .subscribe(contato => this.contato = contato);
  }

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.contatoService.update(this.contato)
        .then(() => this.goBack());
  }

}
