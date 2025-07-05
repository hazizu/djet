import { TestBed } from '@angular/core/testing';

import { UpdatePassGqlService } from './update-pass-gql.service';

describe('UpdatePassGqlService', () => {
  let service: UpdatePassGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatePassGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
