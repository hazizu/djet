import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsButtonItemComponent } from './news-button-item.component';

describe('NewsButtonItemComponent', () => {
  let component: NewsButtonItemComponent;
  let fixture: ComponentFixture<NewsButtonItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsButtonItemComponent]
    });
    fixture = TestBed.createComponent(NewsButtonItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
