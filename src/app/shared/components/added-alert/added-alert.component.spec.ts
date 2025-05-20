import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddedAlertComponent } from './added-alert.component';

describe('AddedAlertComponent', () => {
  let component: AddedAlertComponent;
  let fixture: ComponentFixture<AddedAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddedAlertComponent]
    });
    fixture = TestBed.createComponent(AddedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
