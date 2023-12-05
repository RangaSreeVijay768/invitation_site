import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {BaseComponent} from '@core/components/base.component';
import {Subscription} from 'rxjs';

@Component({
  selector: 'core-modal-footer',
  templateUrl: './modal-footer.component.html',
  styleUrls: ['./modal-footer.component.scss']
})
export class ModalFooterComponent extends BaseComponent {

  @Input()
  buttonText: string;

  @Input()
  actionPromise: Subscription;

  @Input()
  buttonDisabled: boolean;

  @Output()
  actionClicked = new EventEmitter<string>();

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }

  onActionClick() {
    this.actionClicked.emit('Footer action clicked');
  }

}
