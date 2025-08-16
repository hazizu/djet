import { TestBed } from '@angular/core/testing';

import { GetFavoriteGqlService } from './get-favorite-gql.service';

describe('GetFavoriteGqlService', () => {
  let service: GetFavoriteGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFavoriteGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
