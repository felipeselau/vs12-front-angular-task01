import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ABComponent } from './ab.component';

describe('ABComponent', () => {
  let component: ABComponent;
  let fixture: ComponentFixture<ABComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ABComponent]
    });
    fixture = TestBed.createComponent(ABComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
