import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByzLatsComponent } from './byz-lats.component';

describe('ByzLatsComponent', () => {
  let component: ByzLatsComponent;
  let fixture: ComponentFixture<ByzLatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ByzLatsComponent]
    });
    fixture = TestBed.createComponent(ByzLatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
