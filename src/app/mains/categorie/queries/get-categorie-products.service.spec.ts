import { TestBed } from '@angular/core/testing';

import { GetCategorieProductsService } from './get-categorie-products.service';

describe('GetCategorieProductsService', () => {
  let service: GetCategorieProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetCategorieProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
