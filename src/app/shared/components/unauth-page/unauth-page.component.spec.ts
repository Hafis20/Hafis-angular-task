import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthPageComponent } from './unauth-page.component';

describe('UnauthPageComponent', () => {
  let component: UnauthPageComponent;
  let fixture: ComponentFixture<UnauthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnauthPageComponent]
    });
    fixture = TestBed.createComponent(UnauthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
