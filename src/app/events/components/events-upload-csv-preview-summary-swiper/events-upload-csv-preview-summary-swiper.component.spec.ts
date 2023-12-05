import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadCsvPreviewSummarySwiperComponent } from './events-upload-csv-preview-summary-swiper.component';

describe('EventsUploadCsvPreviewSummarySwiperComponent', () => {
  let component: EventsUploadCsvPreviewSummarySwiperComponent;
  let fixture: ComponentFixture<EventsUploadCsvPreviewSummarySwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadCsvPreviewSummarySwiperComponent]
    });
    fixture = TestBed.createComponent(EventsUploadCsvPreviewSummarySwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
