import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSetEventMetaDataComponent } from './basic-set-event-meta-data.component';

describe('BasicSetEventMetaDataComponent', () => {
  let component: BasicSetEventMetaDataComponent;
  let fixture: ComponentFixture<BasicSetEventMetaDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSetEventMetaDataComponent]
    });
    fixture = TestBed.createComponent(BasicSetEventMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
