import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProduitNavItemComponent } from './categorie-produit-nav-item.component';

describe('CategorieProduitNavItemComponent', () => {
  let component: CategorieProduitNavItemComponent;
  let fixture: ComponentFixture<CategorieProduitNavItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorieProduitNavItemComponent]
    });
    fixture = TestBed.createComponent(CategorieProduitNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
