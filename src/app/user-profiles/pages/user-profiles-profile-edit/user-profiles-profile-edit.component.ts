import {Component, EventEmitter, Injector, Input, Output} from '@angular/core';
import {CommonsService} from '@core/commons.service';
import {Observable, Subscription} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import Event = Events.Event;
import {Events, Users} from '@core/core.models';
import UserAccount = Users.UserAccount;

// import EventInfo = Events.EventInfo;

@Component({
  selector: 'user-profiles-profile-edit',
  templateUrl: './user-profiles-profile-edit.component.html',
  styleUrls: ['./user-profiles-profile-edit.component.scss']
})
export class UserProfilesProfileEditComponent extends PageComponent {

  constructor(injector: Injector) {
    super(injector);
  }

  imageType = 'updateProfile';

  event: Event;
  event$: Observable<Event>;


  displayCity = 'Current city';

  Options = ['Email', 'Mobile', 'Whatsapp'];
  countryList = [
    {countryName: 'Select your country', flagSrc: '', cities: ['Select a country']},

    {countryName: 'India', flagSrc: 'assets/images/indian%20flag.png', cities: ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore']},
    {countryName: 'America', flagSrc: 'assets/images/american-flag.png', cities: ['C2']},
    {countryName: 'United Kingdom', flagSrc: 'assets/images/american-flag.png', cities: ['C3']},
  ];
  cityList = ['Delhi', 'Mumbai', 'Hyderabad', 'Bangalore'];
  displayCountry = this.countryList[0].countryName;

  protected readonly EventEmitter = EventEmitter;

  current_time_stamp = CommonsService.getCurrentTimeAsDateTime().toSeconds();

  userAccount: UserAccount;

  userAccount$: Observable<UserAccount>;
  user_account: UserAccount;

  initializeComponent() {
    this.userAccount$ = this.getRouterParameterObservable('userAccount');
    this.userAccount$.subscribe(value => {
      this.user_account = value;
    });
  }



  changeCountry(selectedItem: any) {
    this.displayCountry = selectedItem.countryName;
  }

  changeCity(selectedItem: string) {
    this.displayCity = selectedItem;
  }

  print() {
    console.log('logged account is ', this.userAccount);
    this.loggedAccount = this.userAccount;
    this.authService._loggedAccount = this.userAccount;
    console.log(this.authService._loggedAccount);
    console.log('la is ', this.loggedAccount);
  }
}
