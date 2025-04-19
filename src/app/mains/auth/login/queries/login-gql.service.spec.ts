import { TestBed } from '@angular/core/testing';

import { LoginGqlService } from './login-gql.service';

describe('LoginGqlService', () => {
  let service: LoginGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
