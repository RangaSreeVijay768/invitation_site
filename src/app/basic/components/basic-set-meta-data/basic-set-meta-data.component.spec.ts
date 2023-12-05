import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSetMetaDataComponent } from './basic-set-meta-data.component';

describe('BasicSetMetaDataComponent', () => {
  let component: BasicSetMetaDataComponent;
  let fixture: ComponentFixture<BasicSetMetaDataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSetMetaDataComponent]
    });
    fixture = TestBed.createComponent(BasicSetMetaDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
