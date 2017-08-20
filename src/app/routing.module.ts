import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContatosComponent } from './contatos/contatos.component';
import { ContatoDetailComponent } from './contato-detail/contato-detail.component';
import { ContatoCreateComponent } from './contato-create/contato-create.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: ContatoDetailComponent },
    { path: 'contatos', component: ContatosComponent },
    { path: 'contato-create', component: ContatoCreateComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }
