import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCropImageModalContentComponent } from './images-crop-image-modal-content.component';

describe('ImagesCropImageModalContentComponent', () => {
  let component: ImagesCropImageModalContentComponent;
  let fixture: ComponentFixture<ImagesCropImageModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCropImageModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCropImageModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
