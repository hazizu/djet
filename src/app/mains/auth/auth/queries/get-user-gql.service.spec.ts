import { TestBed } from '@angular/core/testing';

import { GetUserGqlService } from './get-user-gql.service';

describe('GetUserGqlService', () => {
  let service: GetUserGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
