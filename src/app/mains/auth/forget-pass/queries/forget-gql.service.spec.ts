import { TestBed } from '@angular/core/testing';

import { ForgetGqlService } from './forget-gql.service';

describe('ForgetGqlService', () => {
  let service: ForgetGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForgetGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
