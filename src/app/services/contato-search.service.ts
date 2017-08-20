import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Contato } from '../models/contato';

@Injectable()
export class ContatoSearchService {
    constructor(private http: Http) {}
    search(term: string): Observable<Contato[]> {
        return this.http
                .get(`app/contatos/?name=${term}`)
                .map((r: Response) => r.json().data as Contato[]);
    }
}
