import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleArticleCardItemComponent } from './simple-article-card-item.component';

describe('SimpleArticleCardItemComponent', () => {
  let component: SimpleArticleCardItemComponent;
  let fixture: ComponentFixture<SimpleArticleCardItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleArticleCardItemComponent]
    });
    fixture = TestBed.createComponent(SimpleArticleCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
