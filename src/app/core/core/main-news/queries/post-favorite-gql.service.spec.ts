import { TestBed } from '@angular/core/testing';

import { PostFavoriteGqlService } from './post-favorite-gql.service';

describe('PostFavoriteGqlService', () => {
  let service: PostFavoriteGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostFavoriteGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
