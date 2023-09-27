import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erro',
  templateUrl: './erro.component.html',
  styleUrls: ['./erro.component.scss']
})
export class ErroComponent {
  constructor(
    private router: Router
  ) { }
  
  public retornar(): void {
    this.router.navigate(['plano-alimentar']);
  }
}
