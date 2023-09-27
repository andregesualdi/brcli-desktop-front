import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAlimentosComponent } from './tabela-alimentos.component';

describe('TabelaAlimentosComponent', () => {
  let component: TabelaAlimentosComponent;
  let fixture: ComponentFixture<TabelaAlimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabelaAlimentosComponent]
    });
    fixture = TestBed.createComponent(TabelaAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
