import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierResumeItemComponent } from './panier-resume-item.component';

describe('PanierResumeItemComponent', () => {
  let component: PanierResumeItemComponent;
  let fixture: ComponentFixture<PanierResumeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierResumeItemComponent]
    });
    fixture = TestBed.createComponent(PanierResumeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
