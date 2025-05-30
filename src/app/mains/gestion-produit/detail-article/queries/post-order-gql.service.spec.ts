import { TestBed } from '@angular/core/testing';

import { PostOrderGqlService } from './post-order-gql.service';

describe('PostOrderGqlService', () => {
  let service: PostOrderGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostOrderGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
