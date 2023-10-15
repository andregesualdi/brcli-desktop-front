import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/modules/desktop/pages/login/login.component';
import { EsqueciSenhaComponent } from './core/modules/desktop/pages/esqueci-senha/esqueci-senha.component';
import { MeusAgendamentosComponent } from './core/modules/desktop/pages/meus-agendamentos/meus-agendamentos.component';
import { PacientesComponent } from './core/modules/desktop/pages/pacientes/pacientes.component';
import { CadastroPacientesComponent } from './core/modules/desktop/pages/cadastro-pacientes/cadastro-pacientes.component';
import { EditarPacienteComponent } from './core/modules/desktop/pages/editar-paciente/editar-paciente.component';
import { PerfilPacienteComponent } from './core/modules/desktop/pages/perfil-paciente/perfil-paciente.component';
import { ConsultaComponent } from './core/modules/desktop/pages/consulta/consulta.component';
import { AvaliacaoComponent } from './core/modules/desktop/pages/avaliacao/avaliacao.component';
import { MetasComponent } from './core/modules/desktop/pages/metas/metas.component';
import { PlanoAlimentarComponent } from './core/modules/desktop/pages/plano-alimentar/plano-alimentar.component';
import { RefeicaoComponent } from './core/modules/desktop/pages/refeicao/refeicao.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent, canActivate: [AuthGuard] },
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard] },
  { path: 'cadastrar-paciente', component: CadastroPacientesComponent, canActivate: [AuthGuard] },
  { path: 'paciente/:id', component: PerfilPacienteComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'editar-paciente/:id', component: EditarPacienteComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'consulta/:id', component: ConsultaComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'avaliacao/:id', component: AvaliacaoComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'metas/:id', component: MetasComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'plano-alimentar/:id', component: PlanoAlimentarComponent, data: { public: true }, canActivate: [AuthGuard] },
  { path: 'plano-alimentar/:id/:refeicao', component: RefeicaoComponent, data: { public: true }, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
