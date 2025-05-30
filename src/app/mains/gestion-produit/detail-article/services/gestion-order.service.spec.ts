import { TestBed } from '@angular/core/testing';

import { GestionOrderService } from './gestion-order.service';

describe('GestionOrderService', () => {
  let service: GestionOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
