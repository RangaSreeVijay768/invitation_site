import {Injectable} from '@angular/core';
import {Users} from '@core/core.models';
import {Params} from '@angular/router';
// import {LocalStorage, LocalStorageService, SessionStorage, SessionStorageService} from 'ngx-store';
import {CommonsService} from '@core/commons.service';
import {LocalStorage, SessionStorage} from 'ngx-store';
import {LocalStorageService, SessionStorageService} from '@efaps/ngx-store';
import UserAccount = Users.UserAccount;
import UserAuthToken = Users.UserAuthToken;

export const SESSION_KEYS = {
  SESSION_USER_ACCOUNT: 'user_account',
  SESSION_USER_AUTH_TOKEN: 'user_auth_token',
  REDIRECT_STATE: 'redirectstate',
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @SessionStorage(SESSION_KEYS.SESSION_USER_ACCOUNT)
  @LocalStorage(SESSION_KEYS.SESSION_USER_ACCOUNT)
  _loggedAccount: any;
  @SessionStorage(SESSION_KEYS.SESSION_USER_AUTH_TOKEN)
  @LocalStorage(SESSION_KEYS.SESSION_USER_AUTH_TOKEN)
  _userAuthToken: any;
  @LocalStorage(SESSION_KEYS.REDIRECT_STATE)
  _redirectState: RedirectState;

  // constructor() {
  // }
  constructor(protected sessionStorageService: SessionStorageService,
              protected localStorageService: LocalStorageService) {
  }

  getAuthToken(): Promise<string> {
    if (this.userAuthToken) {

      return Promise.resolve(this.userAuthToken.user_auth_token);
    }
    return Promise.resolve(undefined);
  }


  setUserAuthToken(response: UserAuthToken) {
    this.clearAll();
    this._userAuthToken = CommonsService.serialize(response);
    this._loggedAccount = CommonsService.serialize(response.user_account);
  }

  get loggedAccount(): UserAccount {
    if (this._loggedAccount) {
      return CommonsService.deserialize(this._loggedAccount, UserAccount);
    }
    return undefined;
  }

  set loggedAccount(user_account: UserAccount) {
    console.log(user_account);
    this._loggedAccount = CommonsService.serialize(user_account);
  }


  get userAuthToken(): UserAuthToken {
    if (this._userAuthToken) {
      return CommonsService.deserialize(this._userAuthToken, UserAuthToken);
    }
    return undefined;
  }

  get redirectState(): RedirectState {
    if (this._redirectState) {
      return CommonsService.deserialize(this._redirectState, RedirectState);
    }
    return undefined;
  }

  set redirectState(redirectState: RedirectState) {
    this._redirectState = CommonsService.serialize(redirectState);
  }


  public clearAll(): void {
    this.sessionStorageService.clear('all'); // removes all session storage data
    this.localStorageService.clear('all');
  }


}

export class RedirectState {
  url: string;
  queryParams: Params;


  constructor(url?: string, queryParams?: Params) {
    this.url = url;
    this.queryParams = queryParams;
  }
}
