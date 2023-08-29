import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamcroComponent } from './samcro.component';

describe('SamcroComponent', () => {
  let component: SamcroComponent;
  let fixture: ComponentFixture<SamcroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SamcroComponent]
    });
    fixture = TestBed.createComponent(SamcroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
