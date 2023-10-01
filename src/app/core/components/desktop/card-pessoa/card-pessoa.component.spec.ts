import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPessoaComponent } from './card-pessoa.component';

describe('CardPessoaComponent', () => {
  let component: CardPessoaComponent;
  let fixture: ComponentFixture<CardPessoaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPessoaComponent]
    });
    fixture = TestBed.createComponent(CardPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
