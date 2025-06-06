import { TestBed } from '@angular/core/testing';

import { GetOrderArticleGqlService } from './get-order-article-gql.service';

describe('GetOrderArticleGqlService', () => {
  let service: GetOrderArticleGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOrderArticleGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
