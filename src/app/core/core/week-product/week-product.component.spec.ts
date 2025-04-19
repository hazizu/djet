import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekProductComponent } from './week-product.component';

describe('WeekProductComponent', () => {
  let component: WeekProductComponent;
  let fixture: ComponentFixture<WeekProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekProductComponent]
    });
    fixture = TestBed.createComponent(WeekProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
