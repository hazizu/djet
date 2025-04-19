import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookedProductsComponent } from './looked-products.component';

describe('LookedProductsComponent', () => {
  let component: LookedProductsComponent;
  let fixture: ComponentFixture<LookedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LookedProductsComponent]
    });
    fixture = TestBed.createComponent(LookedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
