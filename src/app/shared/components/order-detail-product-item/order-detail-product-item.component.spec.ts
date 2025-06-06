import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailProductItemComponent } from './order-detail-product-item.component';

describe('OrderDetailProductItemComponent', () => {
  let component: OrderDetailProductItemComponent;
  let fixture: ComponentFixture<OrderDetailProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailProductItemComponent]
    });
    fixture = TestBed.createComponent(OrderDetailProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
