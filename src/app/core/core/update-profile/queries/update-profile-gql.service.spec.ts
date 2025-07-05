import { TestBed } from '@angular/core/testing';

import { UpdateProfileGqlService } from './update-profile-gql.service';

describe('UpdateProfileGqlService', () => {
  let service: UpdateProfileGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProfileGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
