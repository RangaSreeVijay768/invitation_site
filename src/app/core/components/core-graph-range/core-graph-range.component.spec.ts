import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CoreGraphRangeComponent } from './core-graph-range.component';

describe('CoreGraphRangeComponent', () => {
  let component: CoreGraphRangeComponent;
  let fixture: ComponentFixture<CoreGraphRangeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreGraphRangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreGraphRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
