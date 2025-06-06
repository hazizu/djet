import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCommandeComponent } from './filter-commande.component';

describe('FilterCommandeComponent', () => {
  let component: FilterCommandeComponent;
  let fixture: ComponentFixture<FilterCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterCommandeComponent]
    });
    fixture = TestBed.createComponent(FilterCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
