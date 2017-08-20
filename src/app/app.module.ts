import { ContatoSearchService } from './services/contato-search.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RoutingModule } from './routing.module';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

import { AppComponent } from './app.component';
import { ContatoDetailComponent } from './contato-detail/contato-detail.component';

import { ContatoService } from './services/contato.service';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatoSearchComponent } from './contato-search/contato-search.component';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { ContatoCreateComponent } from './contato-create/contato-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoDetailComponent,
    ContatosComponent,
    DashboardComponent,
    ContatoSearchComponent,
    ContatoCreateComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  providers: [ContatoService, ContatoSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
