import {BaseComponent} from '@core/components/base.component';
import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Subscription} from 'rxjs';
import {Users} from '@core/core.models';
import UserAccount = Users.UserAccount;
import UserFollow = Users.UserFollow;

@Component({
  selector: 'user-profiles-user-follow',
  templateUrl: './user-profiles-user-follow.component.html',
  styleUrls: ['./user-profiles-user-follow.component.scss']
})
export class UserProfilesUserFollowComponent extends BaseComponent {

  @Input()
  followerAccount: UserAccount;
  @Input()
  userAccount: UserAccount;

  @Input()
  cssClasses: string | string[];

  user_follow:UserFollow;

  constructor(injector: Injector) {
    super(injector);
  }

  initializeComponent() {
  }


}

@Component({
  selector: 'user-profiles-user-follow-no-template',
  templateUrl: './user-profiles-user-follow-no-template.component.html',
  styleUrls: ['./user-profiles-user-follow.component.scss']
})
export class UserProfilesUserFollowNoTemplateComponent extends UserProfilesUserFollowComponent {
}
