import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroComponent } from './erro.component';

describe('ErroComponent', () => {
  let component: ErroComponent;
  let fixture: ComponentFixture<ErroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ErroComponent]
    });
    fixture = TestBed.createComponent(ErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
