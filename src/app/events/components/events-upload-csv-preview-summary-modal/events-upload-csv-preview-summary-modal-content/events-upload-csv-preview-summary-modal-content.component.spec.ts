import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadCsvPreviewSummaryModalContentComponent } from './events-upload-csv-preview-summary-modal-content.component';

describe('EventsUploadCsvPreviewSummaryModalContentComponent', () => {
  let component: EventsUploadCsvPreviewSummaryModalContentComponent;
  let fixture: ComponentFixture<EventsUploadCsvPreviewSummaryModalContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadCsvPreviewSummaryModalContentComponent]
    });
    fixture = TestBed.createComponent(EventsUploadCsvPreviewSummaryModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
