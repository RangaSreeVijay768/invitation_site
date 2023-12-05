import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignedinLandingPageComponent } from './signedin-landing-page.component';

describe('SignedinLandingPageComponent', () => {
  let component: SignedinLandingPageComponent;
  let fixture: ComponentFixture<SignedinLandingPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedinLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedinLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
