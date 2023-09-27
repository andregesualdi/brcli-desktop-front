import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefeicaoComponent } from './refeicao.component';

describe('RefeicaoComponent', () => {
  let component: RefeicaoComponent;
  let fixture: ComponentFixture<RefeicaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefeicaoComponent]
    });
    fixture = TestBed.createComponent(RefeicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
