import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { <%= classify(name) %>AutoCompleteFormControlComponent } from './<%= dasherize(name) %>-auto-complete-form-control.component';

describe('<%= classify(name) %>AutoCompleteFormControlComponent', () => {
    let component: <%= classify(name) %>AutoCompleteFormControlComponent;
    let fixture: ComponentFixture<<%= classify(name) %>AutoCompleteFormControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ <%= classify(name) %>AutoCompleteFormControlComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(<%= classify(name) %>AutoCompleteFormControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
