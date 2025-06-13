import { TestBed } from '@angular/core/testing';

import { PromoNavService } from './promo-nav.service';

describe('PromoNavService', () => {
  let service: PromoNavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PromoNavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
