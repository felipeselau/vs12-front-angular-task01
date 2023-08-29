import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClayMorrowComponent } from './clay-morrow.component';

describe('ClayMorrowComponent', () => {
  let component: ClayMorrowComponent;
  let fixture: ComponentFixture<ClayMorrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClayMorrowComponent]
    });
    fixture = TestBed.createComponent(ClayMorrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
