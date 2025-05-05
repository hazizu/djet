import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueItemComponent } from './key-value-item.component';

describe('KeyValueItemComponent', () => {
  let component: KeyValueItemComponent;
  let fixture: ComponentFixture<KeyValueItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeyValueItemComponent]
    });
    fixture = TestBed.createComponent(KeyValueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
