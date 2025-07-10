import { TestBed } from '@angular/core/testing';

import { GetSimilarGqlService } from './get-similar-gql.service';

describe('GetSimilarGqlService', () => {
  let service: GetSimilarGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSimilarGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
