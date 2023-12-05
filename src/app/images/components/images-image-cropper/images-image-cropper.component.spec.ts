import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesImageCropperComponent } from './images-image-cropper.component';

describe('ImagesImageCropperComponent', () => {
  let component: ImagesImageCropperComponent;
  let fixture: ComponentFixture<ImagesImageCropperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesImageCropperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesImageCropperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
