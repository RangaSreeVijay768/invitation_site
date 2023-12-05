import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {ModalResult} from "@core/app.models";

@Component({
  selector: 'core-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss']
})
export class ModalHeaderComponent extends BaseComponent {

  @Input()
  title: string;

  @Output()
  closeClicked = new EventEmitter<ModalResult>();

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  onCloseClicked(reason?: string, status?: string, data?: any) {
    this.closeClicked.emit({reason, status: status || 'CLOSE', data});
  }
}
