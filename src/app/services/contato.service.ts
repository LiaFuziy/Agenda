import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Contato} from './../models/contato';



@Injectable()
export class ContatoService {
  private contatosUrl = 'api/contatos';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getContatos(): Promise<Contato[]> {
    return this.http.get(this.contatosUrl)
      .toPromise()
      .then(response => response.json().data as Contato[])
      .catch(this.handleError);
  }
  getContato(id: number): Promise<Contato> {
    const url = `${this.contatosUrl}/${id}`;
    return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Contato[])
        .catch(this.handleError);
  }
  update(contato: Contato): Promise<Contato> {
      const url = `${this.contatosUrl}/${contato.id}`;
      return this.http
          .put(url, JSON.stringify(contato), {headers: this.headers})
          .toPromise()
          .then(() => contato)
          .catch(this.handleError);
  }
  create(name: string, email: string, mobile: string): Promise<Contato> {
    return this.http
        .post(this.contatosUrl, JSON.stringify({name: name, email: email, mobile: mobile}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
  }
  delete(id: number): Promise<void> {
    const url = `${this.contatosUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
