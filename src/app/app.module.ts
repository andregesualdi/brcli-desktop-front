import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { DatePipe, registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './core/components/botao/botao.component';
import { MenuLateralComponent } from './core/components/desktop/menu-lateral/menu-lateral.component';
import { CardInformacaoComponent } from './core/components/desktop/card-informacao/card-informacao.component';
import { CardCheckboxComponent } from './core/components/desktop/card-checkbox/card-checkbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './core/components/desktop/loading/loading.component';
import { ErroComponent } from './core/components/erro/erro.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './core/modules/desktop/pages/login/login.component';
import { EsqueciSenhaComponent } from './core/modules/desktop/pages/esqueci-senha/esqueci-senha.component';
import { InputTextoComponent } from './core/components/desktop/input-texto/input-texto.component';
import { MeusAgendamentosComponent } from './core/modules/desktop/pages/meus-agendamentos/meus-agendamentos.component';
import { CardPacienteComponent } from './core/components/desktop/card-paciente/card-paciente.component';
import { PacientesComponent } from './core/modules/desktop/pages/pacientes/pacientes.component';
import { CardPessoaComponent } from './core/components/desktop/card-pessoa/card-pessoa.component';
import { FilterPipe } from './core/modules/desktop/pipes/filter.pipe';
import { CadastroPacientesComponent } from './core/modules/desktop/pages/cadastro-pacientes/cadastro-pacientes.component';
import { EditarPacienteComponent } from './core/modules/desktop/pages/editar-paciente/editar-paciente.component';
import { PerfilPacienteComponent } from './core/modules/desktop/pages/perfil-paciente/perfil-paciente.component';
import { ConsultaComponent } from './core/modules/desktop/pages/consulta/consulta.component';
import { AvaliacaoComponent } from './core/modules/desktop/pages/avaliacao/avaliacao.component';
import { MetasComponent } from './core/modules/desktop/pages/metas/metas.component';
import { PlanoAlimentarComponent } from './core/modules/desktop/pages/plano-alimentar/plano-alimentar.component';
import { RefeicaoComponent } from './core/modules/desktop/pages/refeicao/refeicao.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    MenuLateralComponent,
    CardInformacaoComponent,
    CardCheckboxComponent,
    LoadingComponent,
    ErroComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    InputTextoComponent,
    MeusAgendamentosComponent,
    CardPacienteComponent,
    PacientesComponent,
    CardPessoaComponent,
    FilterPipe,
    CadastroPacientesComponent,
    EditarPacienteComponent,
    PerfilPacienteComponent,
    ConsultaComponent,
    AvaliacaoComponent,
    MetasComponent,
    PlanoAlimentarComponent,
    RefeicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:  {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json?t=' + Date.now());
}