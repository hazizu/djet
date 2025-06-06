import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductItemComponent } from './order-product-item.component';

describe('OrderProductItemComponent', () => {
  let component: OrderProductItemComponent;
  let fixture: ComponentFixture<OrderProductItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderProductItemComponent]
    });
    fixture = TestBed.createComponent(OrderProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
