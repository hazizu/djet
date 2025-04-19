import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipBtnComponent } from './chip-btn.component';

describe('ChipBtnComponent', () => {
  let component: ChipBtnComponent;
  let fixture: ComponentFixture<ChipBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipBtnComponent]
    });
    fixture = TestBed.createComponent(ChipBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
