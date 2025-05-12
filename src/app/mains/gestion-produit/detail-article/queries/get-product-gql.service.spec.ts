import { TestBed } from '@angular/core/testing';

import { GetProductGqlService } from './get-product-gql.service';

describe('GetProductGqlService', () => {
  let service: GetProductGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
