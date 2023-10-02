import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './core/components/botao/botao.component';
import { MenuLateralComponent } from './core/components/desktop/menu-lateral/menu-lateral.component';
import { CardInformacaoComponent } from './core/components/desktop/card-informacao/card-informacao.component';
import { TabelaAlimentosComponent } from './core/components/desktop/tabela/tabela-alimentos.component';
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

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    MenuLateralComponent,
    CardInformacaoComponent,
    TabelaAlimentosComponent,
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
    PerfilPacienteComponent
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
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json?t=' + Date.now());
}