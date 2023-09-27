import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.iniciarI18n();
  }

  private iniciarI18n(): void {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt').subscribe({
      error: () => console.log('Erro configuração i18n') // Modificar quando tela de erro for implementada.
    });
  }
}
