import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDetailArticleComponent } from './info-detail-article.component';

describe('InfoDetailArticleComponent', () => {
  let component: InfoDetailArticleComponent;
  let fixture: ComponentFixture<InfoDetailArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoDetailArticleComponent]
    });
    fixture = TestBed.createComponent(InfoDetailArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
