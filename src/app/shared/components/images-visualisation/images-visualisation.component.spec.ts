import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesVisualisationComponent } from './images-visualisation.component';

describe('ImagesVisualisationComponent', () => {
  let component: ImagesVisualisationComponent;
  let fixture: ComponentFixture<ImagesVisualisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImagesVisualisationComponent]
    });
    fixture = TestBed.createComponent(ImagesVisualisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
