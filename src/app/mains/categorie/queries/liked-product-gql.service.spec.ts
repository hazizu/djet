import { TestBed } from '@angular/core/testing';

import { LikedProductGqlService } from './liked-product-gql.service';

describe('LikedProductGqlService', () => {
  let service: LikedProductGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikedProductGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
