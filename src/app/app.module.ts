import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotaoComponent } from './core/components/botao/botao.component';
import { MenuRodapeComponent } from './core/components/desktop/menu-rodape/menu-rodape.component';
import { CardInformacaoComponent } from './core/components/desktop/card-informacao/card-informacao.component';
import { TabelaAlimentosComponent } from './core/components/desktop/tabela/tabela-alimentos.component';
import { CardCheckboxComponent } from './core/components/desktop/card-checkbox/card-checkbox.component';
import { FormsModule } from '@angular/forms';
import { PlanoAlimentarComponent } from './core/modules/desktop/pages/plano-alimentar/plano-alimentar.component';
import { MetasComponent } from './core/modules/desktop/pages/metas/metas.component';
import { AvaliacaoFisicaComponent } from './core/modules/desktop/pages/avaliacao-fisica/avaliacao-fisica.component';
import { PerfilComponent } from './core/modules/desktop/pages/perfil/perfil.component';
import { RefeicaoComponent } from './core/modules/desktop/pages/refeicao/refeicao.component';
import { LoadingComponent } from './core/components/desktop/loading/loading.component';
import { ErroComponent } from './core/components/erro/erro.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LoginComponent } from './core/modules/desktop/pages/login/login.component';
import { EsqueciSenhaComponent } from './core/modules/desktop/pages/esqueci-senha/esqueci-senha.component';
import { PrimeiroAcessoComponent } from './core/modules/desktop/pages/primeiro-acesso/primeiro-acesso.component';
import { InputTextoComponent } from './core/components/desktop/input-texto/input-texto.component';

registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    BotaoComponent,
    MenuRodapeComponent,
    CardInformacaoComponent,
    TabelaAlimentosComponent,
    CardCheckboxComponent,
    PlanoAlimentarComponent,
    MetasComponent,
    AvaliacaoFisicaComponent,
    PerfilComponent,
    RefeicaoComponent,
    LoadingComponent,
    ErroComponent,
    LoginComponent,
    EsqueciSenhaComponent,
    PrimeiroAcessoComponent,
    InputTextoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
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