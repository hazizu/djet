import { TestBed } from '@angular/core/testing';

import { GetPromoCategorieGqlService } from './get-promo-categorie-gql.service';

describe('GetPromoCategorieGqlService', () => {
  let service: GetPromoCategorieGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPromoCategorieGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
