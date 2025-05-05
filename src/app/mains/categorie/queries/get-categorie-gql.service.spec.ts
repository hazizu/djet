import { TestBed } from '@angular/core/testing';

import { GetCategorieGqlService } from './get-categorie-gql.service';

describe('GetCategorieGqlService', () => {
  let service: GetCategorieGqlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCategorieGqlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
