import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/pages/cadastro/cadastro.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'cadastro', component: CadastroComponent },
  {path: 'login', component: FormComponent, runGuardsAndResolvers: 'always' },
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})

export class AppRoutingModule { }


