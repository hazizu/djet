import { TestBed } from '@angular/core/testing';

import { GetPromoProductService } from './get-promo-product.service';

describe('GetPromoProductService', () => {
  let service: GetPromoProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPromoProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
