import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleurVenteComponent } from './meilleur-vente.component';

describe('MeilleurVenteComponent', () => {
  let component: MeilleurVenteComponent;
  let fixture: ComponentFixture<MeilleurVenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeilleurVenteComponent]
    });
    fixture = TestBed.createComponent(MeilleurVenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
