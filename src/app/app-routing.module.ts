import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/desktop/pages/login/login.component';
import { EsqueciSenhaComponent } from './core/modules/desktop/pages/esqueci-senha/esqueci-senha.component';
import { MeusAgendamentosComponent } from './core/modules/desktop/pages/meus-agendamentos/meus-agendamentos.component';
import { PacientesComponent } from './core/modules/desktop/pages/pacientes/pacientes.component';
import { CadastroPacientesComponent } from './core/modules/desktop/pages/cadastro-pacientes/cadastro-pacientes.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'cadastrar-paciente', component: CadastroPacientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
