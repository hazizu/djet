import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtensibleButtonComponent } from './extensible-button.component';

describe('ExtensibleButtonComponent', () => {
  let component: ExtensibleButtonComponent;
  let fixture: ComponentFixture<ExtensibleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExtensibleButtonComponent]
    });
    fixture = TestBed.createComponent(ExtensibleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
