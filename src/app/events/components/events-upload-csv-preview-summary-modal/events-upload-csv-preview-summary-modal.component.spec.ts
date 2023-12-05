import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadCsvPreviewSummaryModalComponent } from './events-upload-csv-preview-summary-modal.component';

describe('EventsUploadCsvPreviewSummaryModalComponent', () => {
  let component: EventsUploadCsvPreviewSummaryModalComponent;
  let fixture: ComponentFixture<EventsUploadCsvPreviewSummaryModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadCsvPreviewSummaryModalComponent]
    });
    fixture = TestBed.createComponent(EventsUploadCsvPreviewSummaryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
