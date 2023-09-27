import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInformacaoComponent } from './card-informacao.component';

describe('CardInformacaoComponent', () => {
  let component: CardInformacaoComponent;
  let fixture: ComponentFixture<CardInformacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInformacaoComponent]
    });
    fixture = TestBed.createComponent(CardInformacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
