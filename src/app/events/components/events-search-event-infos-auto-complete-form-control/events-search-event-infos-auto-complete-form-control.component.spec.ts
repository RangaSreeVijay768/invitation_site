import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchEventInfosAutoCompleteFormControlComponent } from './events-search-event-infos-auto-complete-form-control.component';

describe('EventsSearchEventInfosAutoCompleteFormControlComponent', () => {
    let component: EventsSearchEventInfosAutoCompleteFormControlComponent;
    let fixture: ComponentFixture<EventsSearchEventInfosAutoCompleteFormControlComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EventsSearchEventInfosAutoCompleteFormControlComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EventsSearchEventInfosAutoCompleteFormControlComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
