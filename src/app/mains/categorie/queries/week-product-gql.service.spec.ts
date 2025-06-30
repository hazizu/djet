import { TestBed } from '@angular/core/testing';

import { WeekProductGqlService } from './week-product-gql.service';

describe('WeekProductGqlService', () => {
  let service: WeekProductGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekProductGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
