import { TestBed } from '@angular/core/testing';

import { LinkArticleToOrderGqlService } from './link-article-to-order-gql.service';

describe('LinkArticleToOrderGqlService', () => {
  let service: LinkArticleToOrderGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkArticleToOrderGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
