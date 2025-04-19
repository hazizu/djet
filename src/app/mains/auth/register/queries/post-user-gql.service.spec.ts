import { TestBed } from '@angular/core/testing';

import { PostUserGqlService } from './post-user-gql.service';

describe('PostUserGqlService', () => {
  let service: PostUserGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostUserGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
