import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValideCommandeComponent } from './valide-commande.component';

describe('ValideCommandeComponent', () => {
  let component: ValideCommandeComponent;
  let fixture: ComponentFixture<ValideCommandeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValideCommandeComponent]
    });
    fixture = TestBed.createComponent(ValideCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
