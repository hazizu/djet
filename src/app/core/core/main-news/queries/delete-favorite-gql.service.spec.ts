import { TestBed } from '@angular/core/testing';

import { DeleteFavoriteGqlService } from './delete-favorite-gql.service';

describe('DeleteFavoriteGqlService', () => {
  let service: DeleteFavoriteGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFavoriteGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
