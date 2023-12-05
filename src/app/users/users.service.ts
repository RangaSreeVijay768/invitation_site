import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
// @ts-ignore
import {Restangular} from 'ngx-restangular';
import {UsersConstants} from '@app/users/users.constants';
import {UsersRequests} from '@app/users/users.models';
import {Observable} from 'rxjs';
import {CoreHttpClient} from '@core/http/http.module';
import SignIn = UsersRequests.SignIn;
import SignUp = UsersRequests.SignUp;
import UpdateUserAccount = UsersRequests.UpdateUserAccount;
import VerifyUserAccountVerification = UsersRequests.VerifyUserAccountVerification;
import StartLogin = UsersRequests.StartLogin;
import VerifyUserAccountVerificationLogin = UsersRequests.VerifyUserAccountVerificationLogin;
import GetUserFollowByFollowerAccount = UsersRequests.GetUserFollowByFollowerAccount;
import GetUserFollowByUserAccount = UsersRequests.GetUserFollowByUserAccount;
import GetUserFollowByUserAccountAndFollowerAccount = UsersRequests.GetUserFollowByUserAccountAndFollowerAccount;
import CreateUserFollow = UsersRequests.CreateUserFollow;
import DeleteUserFollow = UsersRequests.DeleteUserFollow;
import GetAllUserContacts = UsersRequests.GetAllUserContacts;
import CreateMultipleUserContact = UsersRequests.CreateMultipleUserContact;
import SignInUserFromGoogle = UsersRequests.SignInUserFromGoogle;
import GetUserContactsByUserAccount = UsersRequests.GetUserContactsByUserAccount;
import GetUserAccount = UsersRequests.GetUserAccount;
import CreateUserContact = UsersRequests.CreateUserContact;
import GetOrCreateUserAccountAndStartLogin = UsersRequests.GetOrCreateUserAccountAndStartLogin;
import DeleteUserContact = UsersRequests.DeleteUserContact;
import UpdateUserContact = UsersRequests.UpdateUserContact;

@Injectable({
    providedIn: 'root'
})
export class UsersService extends RestService {


    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = UsersConstants.USERS_ENDPOINT;
        this.secured_end_point = UsersConstants.USERS_SECURED_ENDPOINT;

    }

    signIn(request: SignIn.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/signin`, this.serialize(request));
    }

    signUp(request: SignUp.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/signup`, this.serialize(request));
    }

    updateUserAccount(request: UpdateUserAccount.Request): Observable<any> {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/${request.user_account_id}`, this.serialize(request));
    }

    verifyUserAccountVerification(request: VerifyUserAccountVerification.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/verifyuseraccountverification`, this.serialize(request));
    }

    startLogin(request: StartLogin.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/startlogin`, this.serialize(request));
    }

    verifyUserAccountVerificationLogin(request: VerifyUserAccountVerificationLogin.Request): Observable<any> {
        return this.httpClient.post(`${this.getEndPoint()}/verifyuseraccountverificationlogin`,
            this.serialize(request));
    }

    getUserFollowByFollowerAccount(request: GetUserFollowByFollowerAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/followerAccount`,
            {params: this.serialize(request)});
    }

    getUserFollowByUserAccount(request: GetUserFollowByUserAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/useraccount`,
            {params: this.serialize(request)});
    }

    getUserFollowByUserAccountAndFollowerAccount(request: GetUserFollowByUserAccountAndFollowerAccount.Request): Observable<any> {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/userfollow/useraccountandfolloweraccount`,
            {params: this.serialize(request)});
    }

    createUserFollow(request: CreateUserFollow.Request): Observable<any> {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/userfollow`, this.serialize(request));
    }

    deleteUserFollow(request: DeleteUserFollow.Request): Observable<any> {
        return this.httpClient.delete(`${this.getSecuredEndPoint()}/userfollow/${request.id}`, this.serialize(request));
    }

    getAllUserContacts(request: GetAllUserContacts.Request): Observable<any> {
        return this.httpClient.get(`${this.getEndPoint()}/usercontacts/all`, {params: this.serialize(request)});
    }

    createMultipleUserContact(request: CreateMultipleUserContact.Request): Observable<any> {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/usercontacts/multipleusercontact`,
            this.serialize(request));
    }

    signInUserFromGoogle(request: SignInUserFromGoogle.Request) {
        return this.httpClient.post(`${this.getEndPoint()}/signin/google`, this.serialize(request));
    }

    getUserContactsByUserAccount(request: GetUserContactsByUserAccount.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usercontacts/useraccount`, {params: this.serialize(request)});
    }

    getUserAccount(request: GetUserAccount.Request): Observable<any> {
      return this.httpClient.get(`${this.getEndPoint()}/${request.id}`, {params: this.serialize(request)});
    }

    createUserContact(request: CreateUserContact.Request): Observable<any> {
      return this.httpClient.post(`${this.getSecuredEndPoint()}/usercontacts`,
        this.serialize(request));
    }
    getOrCreateUserAccountAndStartLogin(request: GetOrCreateUserAccountAndStartLogin.Request): Observable<any> {
        return this.httpClient.get(`${this.getEndPoint()}/getorcreateuseraccountandstartlogin`, {params: this.serialize(request)});
    }

    deleteUserContact(request: DeleteUserContact.Request): Observable<any> {
      return this.httpClient.delete(`${this.getSecuredEndPoint()}/usercontacts/${request.userContactId}`, this.serialize(request));
    }

    updateUserContact(request: UpdateUserContact.Request): Observable<any> {
      return this.httpClient.put(`${this.getSecuredEndPoint()}/usercontacts/${request.userContactId}`, this.serialize(request));
    }
}
