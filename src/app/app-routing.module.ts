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

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'meus-agendamentos', component: MeusAgendamentosComponent },
  { path: 'pacientes', component: PacientesComponent },
  { path: 'cadastrar-paciente', component: CadastroPacientesComponent },
  { path: 'paciente/:id', component: PerfilPacienteComponent, data: { public: true } },
  { path: 'editar-paciente/:id', component: EditarPacienteComponent, data: { public: true } },
  { path: 'consulta/:id', component: ConsultaComponent, data: { public: true } },
  { path: 'avaliacao/:id', component: AvaliacaoComponent, data: { public: true } },
  { path: 'metas/:id', component: MetasComponent, data: { public: true } },
  { path: 'plano-alimentar/:id', component: PlanoAlimentarComponent, data: { public: true } },
  { path: 'plano-alimentar/:id/:refeicao', component: RefeicaoComponent, data: { public: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
