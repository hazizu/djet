import { TestBed } from '@angular/core/testing';

import { LookedProductGqlService } from './looked-product-gql.service';

describe('LookedProductGqlService', () => {
  let service: LookedProductGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LookedProductGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
