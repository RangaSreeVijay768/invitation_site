import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesCropImageModalComponent } from './images-crop-image-modal.component';

describe('ImagesCropImageModalComponent', () => {
  let component: ImagesCropImageModalComponent;
  let fixture: ComponentFixture<ImagesCropImageModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagesCropImageModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesCropImageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
