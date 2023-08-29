import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JohnTellerComponent } from './john-teller.component';

describe('JohnTellerComponent', () => {
  let component: JohnTellerComponent;
  let fixture: ComponentFixture<JohnTellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JohnTellerComponent]
    });
    fixture = TestBed.createComponent(JohnTellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
