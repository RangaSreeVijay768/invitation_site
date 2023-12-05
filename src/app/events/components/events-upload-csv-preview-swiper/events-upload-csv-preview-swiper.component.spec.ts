import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsUploadCsvPreviewSwiperComponent } from './events-upload-csv-preview-swiper.component';

describe('EventsUploadCsvPreviewSwiperComponent', () => {
  let component: EventsUploadCsvPreviewSwiperComponent;
  let fixture: ComponentFixture<EventsUploadCsvPreviewSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsUploadCsvPreviewSwiperComponent]
    });
    fixture = TestBed.createComponent(EventsUploadCsvPreviewSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
