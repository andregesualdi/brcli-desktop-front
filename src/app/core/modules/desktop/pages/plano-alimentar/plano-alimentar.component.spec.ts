import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoAlimentarComponent } from './plano-alimentar.component';

describe('PlanoAlimentarComponent', () => {
  let component: PlanoAlimentarComponent;
  let fixture: ComponentFixture<PlanoAlimentarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlanoAlimentarComponent]
    });
    fixture = TestBed.createComponent(PlanoAlimentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
