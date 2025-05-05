import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIdentifiantComponent } from './update-identifiant.component';

describe('UpdateIdentifiantComponent', () => {
  let component: UpdateIdentifiantComponent;
  let fixture: ComponentFixture<UpdateIdentifiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateIdentifiantComponent]
    });
    fixture = TestBed.createComponent(UpdateIdentifiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
