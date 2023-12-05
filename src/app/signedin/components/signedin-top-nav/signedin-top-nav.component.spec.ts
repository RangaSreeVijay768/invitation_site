import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SignedinTopNavComponent } from './signedin-top-nav.component';

describe('SignedinTopNavComponent', () => {
  let component: SignedinTopNavComponent;
  let fixture: ComponentFixture<SignedinTopNavComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedinTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedinTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
