import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPacienteComponent } from './card-paciente.component';

describe('CardPacienteComponent', () => {
  let component: CardPacienteComponent;
  let fixture: ComponentFixture<CardPacienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPacienteComponent]
    });
    fixture = TestBed.createComponent(CardPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
