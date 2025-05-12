import { TestBed } from '@angular/core/testing';

import { GetSubCategirieGqlService } from './get-sub-categirie-gql.service';

describe('GetSubCategirieGqlService', () => {
  let service: GetSubCategirieGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSubCategirieGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
