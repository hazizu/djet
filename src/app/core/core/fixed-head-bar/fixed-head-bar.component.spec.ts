import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedHeadBarComponent } from './fixed-head-bar.component';

describe('FixedHeadBarComponent', () => {
  let component: FixedHeadBarComponent;
  let fixture: ComponentFixture<FixedHeadBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FixedHeadBarComponent]
    });
    fixture = TestBed.createComponent(FixedHeadBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
