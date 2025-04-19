import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallNewsButtonItemComponent } from './small-news-button-item.component';

describe('SmallNewsButtonItemComponent', () => {
  let component: SmallNewsButtonItemComponent;
  let fixture: ComponentFixture<SmallNewsButtonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallNewsButtonItemComponent]
    });
    fixture = TestBed.createComponent(SmallNewsButtonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
