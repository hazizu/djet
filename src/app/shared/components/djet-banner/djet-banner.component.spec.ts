import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjetBannerComponent } from './djet-banner.component';

describe('DjetBannerComponent', () => {
  let component: DjetBannerComponent;
  let fixture: ComponentFixture<DjetBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjetBannerComponent]
    });
    fixture = TestBed.createComponent(DjetBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
