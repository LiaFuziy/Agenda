import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ContatoSearchService } from '../services/contato-search.service';
import { Contato } from '../models/contato';

@Component({
    selector: 'app-contato-search',
    templateUrl: './contato-search.component.html',
    styleUrls: ['./contato-search.component.css']
})
export class ContatoSearchComponent implements OnInit {

  contatos: Observable<Contato[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private contatoSearchService: ContatoSearchService,
        private router: Router) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.contatos = this.searchTerms
        .debounceTime(300)        // wait for 300ms pause in events
        .distinctUntilChanged()   // ignore if next search term is same as previous
        .switchMap(term => term   // switch to new observable each time
            ? this.contatoSearchService.search(term)
            : Observable.of<Contato[]>([]))
        .catch(error => {
            console.log(error);
            return Observable.of<Contato[]>([]);
        });
    }

    goToDetail(contato: Contato): void {
        let link = ['/detail', contato.id];
        this.router.navigate(link);
    }
}
