import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>TagInputFormControlComponent } from './<%= dasherize(name) %>-tag-input-form-control.component';

describe('<%= classify(name) %>TagInputFormControlComponent', () => {
    let component: <%= classify(name) %>TagInputFormControlComponent;
    let fixture: ComponentFixture<<%= classify(name) %>TagInputFormControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ <%= classify(name) %>TagInputFormControlComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(<%= classify(name) %>TagInputFormControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
