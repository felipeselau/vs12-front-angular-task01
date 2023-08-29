import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrimBastardsComponent } from './grim-bastards.component';

describe('GrimBastardsComponent', () => {
  let component: GrimBastardsComponent;
  let fixture: ComponentFixture<GrimBastardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrimBastardsComponent]
    });
    fixture = TestBed.createComponent(GrimBastardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
