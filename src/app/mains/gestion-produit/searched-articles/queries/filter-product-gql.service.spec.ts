import { TestBed } from '@angular/core/testing';

import { FilterProductGqlService } from './filter-product-gql.service';

describe('FilterProductGqlService', () => {
  let service: FilterProductGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterProductGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
