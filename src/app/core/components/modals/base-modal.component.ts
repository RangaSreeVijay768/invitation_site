import {BaseComponent} from '@core/components/base.component';
import {Directive, EventEmitter, Injector, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalConfig, NgbModalOptions, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ModalResult} from "@core/app.models";

@Directive()
export abstract class BaseModalComponent extends BaseComponent {

  public static DEFAULT_MODAL_SM: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'sm', windowClass: 'full-screen-height-2'
  };
  public static DEFAULT_MODAL_MD: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'dailog-md'
  };
  public static DEFAULT_MODAL_LG: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg'
  };
  public static DEFAULT_MODAL_XS: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'screen-height-sm'
  };
  public static DEFAULT_MODAL_LG_XL: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'dailog-xl h-unset'
  };
  public static DEFAULT_MODAL_LG_XL_DARK: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'dailog-xl dailog-dark-xl'
  };
  public static DEFAULT_MODAL_MD_DARK: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'dailog-md dailog-dark-xl pt-5'
  };
  public static DEFAULT_MODAL_FS: NgbModalOptions = {
    backdrop: false, keyboard: false, size: 'lg', windowClass: 'full-screen-height'
  };
  public static DEFAULT_MODAL_XL: NgbModalOptions = {
    backdrop: false, keyboard: false, size: 'lg', windowClass: 'full-screen-height-2'
  };
  public static DEFAULT_MODAL_MD_LG: NgbModalOptions = {
    backdrop: false, keyboard: false, size: 'lg', windowClass: 'dailog-md md-screen-height'
  };
  public static DEFAULT_MODAL_FS_XL: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'dailog-xl full-screen-height'
  };
  public static DEFAULT_MODAL_PROGRAM: NgbModalOptions = {
    backdrop: false, keyboard: true, size: 'lg', windowClass: 'program-creation-modal'
  };

  modalService: NgbModal;
  modalConfig: NgbModalConfig;

  modalRef: NgbModalRef;

  @Output()
  closeResult = new EventEmitter<ModalResult>();

  constructor(injector: Injector) {
    super(injector);
    this.modalService = injector.get(NgbModal);
    this.modalConfig = injector.get(NgbModalConfig);
  }

  open(content, options?:NgbModalOptions) {
    this.modalRef = this.modalService.open(content, options);
    this.subscribeToModalClose();
    return this.modalRef;
  }

  executeModalClose(object: ModalResult) {
    this.closeResult.emit(object);
  }

  abstract closeModal();

  abstract performAction();

  subscribeToModalClose() {
    this.modalRef.componentInstance.closeModalClicked.subscribe((e: ModalResult) => {
      this.closeModal();
      if (this.modalRef.componentInstance) {
        this.modalRef.componentInstance.completeCloseModal(e);
      }
      this.executeModalClose(e);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  setModalData(key, value) {
    this.modalRef.componentInstance[key] = value;
  }
}
