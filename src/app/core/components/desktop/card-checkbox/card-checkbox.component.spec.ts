import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCheckboxComponent } from './card-checkbox.component';

describe('CardCheckboxComponent', () => {
  let component: CardCheckboxComponent;
  let fixture: ComponentFixture<CardCheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardCheckboxComponent]
    });
    fixture = TestBed.createComponent(CardCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
