import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalisationPopupInfosComponent } from './localisation-popup-infos.component';

describe('LocalisationPopupInfosComponent', () => {
  let component: LocalisationPopupInfosComponent;
  let fixture: ComponentFixture<LocalisationPopupInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocalisationPopupInfosComponent]
    });
    fixture = TestBed.createComponent(LocalisationPopupInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
