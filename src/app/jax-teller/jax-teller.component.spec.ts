import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JaxTellerComponent } from './jax-teller.component';

describe('JaxTellerComponent', () => {
  let component: JaxTellerComponent;
  let fixture: ComponentFixture<JaxTellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JaxTellerComponent]
    });
    fixture = TestBed.createComponent(JaxTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
