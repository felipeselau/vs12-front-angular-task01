import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilipTrelfordComponent } from './filip-trelford.component';

describe('FilipTrelfordComponent', () => {
  let component: FilipTrelfordComponent;
  let fixture: ComponentFixture<FilipTrelfordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilipTrelfordComponent]
    });
    fixture = TestBed.createComponent(FilipTrelfordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
