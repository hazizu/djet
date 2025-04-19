import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBasedProductsComponent } from './search-based-products.component';

describe('SearchBasedProductsComponent', () => {
  let component: SearchBasedProductsComponent;
  let fixture: ComponentFixture<SearchBasedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBasedProductsComponent]
    });
    fixture = TestBed.createComponent(SearchBasedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
