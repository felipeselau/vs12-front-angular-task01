import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MayansComponent } from './mayans.component';

describe('MayansComponent', () => {
  let component: MayansComponent;
  let fixture: ComponentFixture<MayansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MayansComponent]
    });
    fixture = TestBed.createComponent(MayansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
