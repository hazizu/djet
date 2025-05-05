import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GarantieItemComponent } from './garantie-item.component';

describe('GarantieItemComponent', () => {
  let component: GarantieItemComponent;
  let fixture: ComponentFixture<GarantieItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GarantieItemComponent]
    });
    fixture = TestBed.createComponent(GarantieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
