import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMainNewsComponent } from './sub-main-news.component';

describe('SubMainNewsComponent', () => {
  let component: SubMainNewsComponent;
  let fixture: ComponentFixture<SubMainNewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubMainNewsComponent]
    });
    fixture = TestBed.createComponent(SubMainNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
