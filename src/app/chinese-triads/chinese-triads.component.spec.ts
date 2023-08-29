import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChineseTriadsComponent } from './chinese-triads.component';

describe('ChineseTriadsComponent', () => {
  let component: ChineseTriadsComponent;
  let fixture: ComponentFixture<ChineseTriadsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChineseTriadsComponent]
    });
    fixture = TestBed.createComponent(ChineseTriadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
