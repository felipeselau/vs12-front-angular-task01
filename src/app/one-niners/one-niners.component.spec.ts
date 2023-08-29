import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneNinersComponent } from './one-niners.component';

describe('OneNinersComponent', () => {
  let component: OneNinersComponent;
  let fixture: ComponentFixture<OneNinersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneNinersComponent]
    });
    fixture = TestBed.createComponent(OneNinersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
