import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextoComponent } from './input-texto.component';

describe('InputTextoComponent', () => {
  let component: InputTextoComponent;
  let fixture: ComponentFixture<InputTextoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTextoComponent]
    });
    fixture = TestBed.createComponent(InputTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
