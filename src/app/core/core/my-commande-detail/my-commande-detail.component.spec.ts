import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCommandeDetailComponent } from './my-commande-detail.component';

describe('MyCommandeDetailComponent', () => {
  let component: MyCommandeDetailComponent;
  let fixture: ComponentFixture<MyCommandeDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCommandeDetailComponent]
    });
    fixture = TestBed.createComponent(MyCommandeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
