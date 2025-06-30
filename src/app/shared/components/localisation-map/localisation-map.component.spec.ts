import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationMapComponent } from './localisation-map.component';

describe('LocalisationMapComponent', () => {
  let component: LocalisationMapComponent;
  let fixture: ComponentFixture<LocalisationMapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisationMapComponent]
    });
    fixture = TestBed.createComponent(LocalisationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
