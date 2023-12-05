import {BaseComponent} from '@core/components/base.component';
import { AfterViewInit, ChangeDetectorRef, EventEmitter, Injector, Output, Directive } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {combineLatest} from 'rxjs';
import {ModalResult} from "@core/app.models";

@Directive()
export abstract class BaseModalContentComponent extends BaseComponent implements AfterViewInit {

  @Output()
  closeModalClicked = new EventEmitter<ModalResult>();

  effectsObservableArray = [];

  changeDetectorRef: ChangeDetectorRef;

  constructor(public activeModal: NgbActiveModal, injector: Injector) {
    super(injector);
    this.changeDetectorRef = injector.get(ChangeDetectorRef);
  }


  closeModal(modalResult?: ModalResult) {
    if (this.effectsObservableArray.length) {
      combineLatest(this.effectsObservableArray)
        .subscribe(values => {
          this.closeModalClicked.emit(modalResult);
        });
    } else {
      this.closeModalClicked.emit(modalResult);
    }
  }

  completeCloseModal(reason, dismiss?) {
    if (dismiss) {
      this.activeModal.dismiss(reason);
    } else {
      this.activeModal.close(reason);
    }
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges(); // run change detection after changes
  }
}
