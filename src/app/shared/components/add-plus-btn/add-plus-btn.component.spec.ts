import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlusBtnComponent } from './add-plus-btn.component';

describe('AddPlusBtnComponent', () => {
  let component: AddPlusBtnComponent;
  let fixture: ComponentFixture<AddPlusBtnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPlusBtnComponent]
    });
    fixture = TestBed.createComponent(AddPlusBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
