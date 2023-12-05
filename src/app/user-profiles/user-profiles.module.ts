import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {
    UserProfilesUserProfilePageComponent
} from './pages/user-profiles-user-profile-page/user-profiles-user-profile-page.component';
import {UserProfilesMainPageComponent} from './pages/user-profiles-main-page/user-profiles-main-page.component';
import {
    UserProfilesProfileEditComponent
} from './pages/user-profiles-profile-edit/user-profiles-profile-edit.component';
import {
    UserProfilesPayoutInformationComponent
} from './pages/user-profiles-payout-information/user-profiles-payout-information.component';
import {
    UserProfilesProfileEditFormComponent
} from './components/user-profiles-profile-edit-form/user-profiles-profile-edit-form.component';
import {ImagesModule} from '@images/images.module';
import {
    UserProfilesProfilePastGuestsComponent
} from './pages/user-profiles-profile-past-guests/user-profiles-profile-past-guests.component';
import {BlastsModule} from '@app/blasts/blasts.module';
import {UsersModule} from '@users/users.module';

import {
    UserProfilesBlastsDefaultPageComponent
} from './pages/user-profiles-blasts-default-page/user-profiles-blasts-default-page.component';
import {
    UserProfilesBlastsMainPageComponent
} from './pages/user-profiles-blasts-main-page/user-profiles-blasts-main-page.component';
import {
    UserProfilesBlastDetailsPageComponent
} from './pages/user-profiles-blast-details-page/user-profiles-blast-details-page.component';
import {
    UserProfilesPayoutInformationFormComponent
} from './components/user-profiles-payout-information-form/user-profiles-payout-information-form.component';
import {
    UserProfilesBlastsAddUploadContactModalComponent
} from './components/user-profiles-blasts-add-upload-contact-modal/user-profiles-blasts-add-upload-contact-modal.component';
import {
    UserProfilesBlastsAddUploadContactModalContentComponent
} from './components/user-profiles-blasts-add-upload-contact-modal/user-profiles-blasts-add-upload-contact-modal-content/user-profiles-blasts-add-upload-contact-modal-content.component';
import {
    UserProfilesBlastsCreateNewGroupModalComponent
} from './components/user-profiles-blasts-create-new-group-modal/user-profiles-blasts-create-new-group-modal.component';
import {
    UserProfilesBlastsCreateNewGroupModalContentComponent
} from './components/user-profiles-blasts-create-new-group-modal/user-profiles-blasts-create-new-group-modal-content/user-profiles-blasts-create-new-group-modal-content.component';
import {
    UserProfilesBlastsFilterModalComponent, UserProfilesBlastsFilterModalNoTemplateComponent
} from './components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal.component';
import {
    UserProfilesBlastsFilterModalContentComponent
} from './components/user-profiles-blasts-filter-modal/user-profiles-blasts-filter-modal-content/user-profiles-blasts-filter-modal-content.component';
import {
    UserProfilesBlastsInviteToEventModalComponent
} from './components/user-profiles-blasts-invite-to-event-modal/user-profiles-blasts-invite-to-event-modal.component';
import {
    UserProfilesBlastsInviteToEventModalContentComponent
} from './components/user-profiles-blasts-invite-to-event-modal/user-profiles-blasts-invite-to-event-modal-content/user-profiles-blasts-invite-to-event-modal-content.component';
import {
    UserProfilesBlastDetailsContactsPageComponent
} from './pages/user-profiles-blast-details-contacts-page/user-profiles-blast-details-contacts-page.component';
import {
    UserProfilesBlastDetailsBlastsPageComponent
} from './pages/user-profiles-blast-details-blasts-page/user-profiles-blast-details-blasts-page.component';
import {
    UserProfilesPurchaseHistoryPageComponent
} from './pages/user-profiles-purchase-history-page/user-profiles-purchase-history-page.component';
import {
    UserProfilesGetEventAttendessOfUserAccountComponent, UserProfilesGetEventAttendessOfUserAccountScrollingComponent
} from './components/user-profiles-get-event-attendess-of-user-account/user-profiles-get-event-attendess-of-user-account.component';
import {
    UserProfilesBlastsCreateBlastListFormComponent
} from './components/user-profiles-blasts-create-blast-list-form/user-profiles-blasts-create-blast-list-form.component';
import {
    UserProfilesGetAllEventsComponent
} from './components/user-profiles-get-all-events/user-profiles-get-all-events.component';
import {
    UserProfilesBlastsInviteContactsToEventModalComponent
} from './components/user-profiles-blasts-invite-contacts-to-event-modal/user-profiles-blasts-invite-contacts-to-event-modal.component';
import {
    UserProfilesBlastsInviteContactsToEventModalContentComponent
} from './components/user-profiles-blasts-invite-contacts-to-event-modal/user-profiles-blasts-invite-contacts-to-event-modal-content/user-profiles-blasts-invite-contacts-to-event-modal-content.component';
import {
    UserProfilesInviteToEventSliderComponent
} from './components/user-profiles-invite-to-event-slider/user-profiles-invite-to-event-slider.component';
import {
    UserProfilesCreateEventBlastComponent, UserProfilesCreateEventBlastNoTemplateComponent
} from './components/user-profiles-create-event-blast/user-profiles-create-event-blast.component';
import {
    UserProfilesStartEventBlastComponent
} from './components/user-profiles-start-event-blast/user-profiles-start-event-blast.component';
import {
    UserProfilesAddEventBlastRecipientComponent
} from './components/user-profiles-add-event-blast-recipient/user-profiles-add-event-blast-recipient.component';
import {
    UserProfilesGetEventBlastByBlastListComponent, UserProfilesGetEventBlastByBlastListScrollingComponent
} from './components/user-profiles-get-event-blast-by-blast-list/user-profiles-get-event-blast-by-blast-list.component';
import {
    UserProfilesBlastsInviteToEventSwiperComponent
} from './components/user-profiles-blasts-invite-to-event-swiper/user-profiles-blasts-invite-to-event-swiper.component';
import {
    UserProfilesCreateBlastListItemComponent, UserProfilesCreateBlastListItemNoTemplateComponent
} from './components/user-profiles-create-blast-list-item/user-profiles-create-blast-list-item.component';
import {
    UserProfilesCreateBlastItemFormComponent
} from './components/user-profiles-create-blast-item-form/user-profiles-create-blast-item-form.component';
import {
    UserProfilesGetUserFollowByFollowerAccountComponent, UserProfilesGetUserFollowByFollowerAccountNoTemplateComponent
} from './components/user-profiles-get-user-follow-by-follower-account/user-profiles-get-user-follow-by-follower-account.component';
import {
    UserProfilesGetUserFollowByUserAccountComponent, UserProfilesGetUserFollowByUserAccountNoTemplateComponent
} from './components/user-profiles-get-user-follow-by-user-account/user-profiles-get-user-follow-by-user-account.component';
import {
    UserProfilesUserFollowComponent, UserProfilesUserFollowNoTemplateComponent
} from './components/user-profiles-user-follow/user-profiles-user-follow.component';
import {
    UserProfilesCreateUserFollowComponent, UserProfilesCreateUserFollowNoTemplateComponent
} from './components/user-profiles-create-user-follow/user-profiles-create-user-follow.component';
import {
    UserProfilesDeleteUserFollowComponent, UserProfilesDeleteUserFollowNoTemplateComponent
} from './components/user-profiles-delete-user-follow/user-profiles-delete-user-follow.component';
import {
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent,
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent
} from '@app/user-profiles/components/user-profiles-get-user-follow-by-user-account-and-follower-account/user-profiles-get-user-follow-by-user-account-and-follower-account.component';
import {
    BlastsGetBlastListsByUserAccountScrollingComponent
} from '@app/blasts/components/blasts-get-blast-lists-by-user-account/blasts-get-blast-lists-by-user-account.component';
import {
    UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent
} from './components/user-profiles-blasts-invite-to-event-swiper-search-event-form/user-profiles-blasts-invite-to-event-swiper-search-event-form.component';
import {
    UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent
} from './components/user-profiles-blasts-invite-to-event-swiper-search-contact-form/user-profiles-blasts-invite-to-event-swiper-search-contact-form.component';
import {
    EventsGetUserEventTicketsByUserAccountScrollingNoTemplateComponent,
    UserProfilesGetUserEventTicketsByUserAccountScrollingComponent
} from './components/user-profiles-get-user-event-tickets-by-user-account-scrolling/user-profiles-get-user-event-tickets-by-user-account-scrolling.component';
import {
    UserProfilesGetAllUserContactsComponent, UserProfilesGetAllUserContactsNoTemplateComponent
} from './components/user-profiles-get-all-user-contacts/user-profiles-get-all-user-contacts.component';
import {
    UserProfilesCreateMultipleUserContactComponent
} from './components/user-profiles-create-multiple-user-contact/user-profiles-create-multiple-user-contact.component';
import {
    UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent
} from './components/user-profiles-create-blast-list-and-blast-list-items-by-user-contacts/user-profiles-create-blast-list-and-blast-list-items-by-user-contacts.component';
import {
  UserProfilesGetUserContactsByUserAccountComponent,
  UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
  UserProfilesGetUserContactsByUserAccountScrollingComponent
} from './components/user-profiles-get-user-contacts-by-user-account/user-profiles-get-user-contacts-by-user-account.component';
import {
    UserProfilesUserProfileDetailsModalComponent
} from './components/user-profiles-user-profile-details-modal/user-profiles-user-profile-details-modal.component';
import {
    UserProfilesGetUserAccountComponent, UserProfilesGetUserAccountNoTemplateComponent
} from './components/user-profiles-get-user-account/user-profiles-get-user-account.component';
import {UserProfilesCommonModule} from '@app/user-profiles/user-profiles.common.module';
import {RouterModule} from '@angular/router';
import {USER_PROFILES_ROUTES} from '@app/user-profiles/user-profiles.routes';
import {
  UserProfilesProfileAllContactsComponent, UserProfilesProfileAllContactsScrollingComponent
} from '@user-profiles/pages/user-profiles-profile-all-contacts/user-profiles-profile-all-contacts.component';
import {EventsModule} from '@events/events.module';
import {
  UserProfilesUserContactsFromCsvSwiperModalComponent
} from '@user-profiles/components/user-profiles-user-contacts-from-csv-swiper-modal/user-profiles-user-contacts-from-csv-swiper-modal.component';
import {
  UserProfilesCreateUserContactModalComponent
} from '@user-profiles/components/user-profiles-create-user-contact-modal/user-profiles-create-user-contact-modal.component';
import {
  UserProfilesCreateUserContactModalContentComponent
} from '@user-profiles/components/user-profiles-create-user-contact-modal/user-profiles-create-user-contact-modal-content/user-profiles-create-user-contact-modal-content.component';
import {
  UserProfilesCreatUserContactFormComponent
} from '@user-profiles/components/user-profiles-creat-user-contact-form/user-profiles-creat-user-contact-form.component';
import {
  UserProfilesDeleteUserContactComponent
} from '@user-profiles/components/user-profiles-delete-user-contact/user-profiles-delete-user-contact.component';
import {
  UserProfilesUpdateUserContactFormComponent
} from '@user-profiles/components/user-profiles-update-user-contact-form/user-profiles-update-user-contact-form.component';
import {
  UserProfilesUpdateUserContactModalComponent
} from '@user-profiles/components/user-profiles-update-user-contact-modal/user-profiles-update-user-contact-modal.component';
import {
  UserProfilesUpdateUserContactModalContentComponent
} from '@user-profiles/components/user-profiles-update-user-contact-modal/user-profiles-update-user-contact-modal-content/user-profiles-update-user-contact-modal-content.component';
import {
  UserProfilesCreateUserContactSelectContactTypeModalComponent
} from '@user-profiles/components/user-profiles-create-user-contact-select-contact-type-modal/user-profiles-create-user-contact-select-contact-type-modal.component';
import {
  UserProfilesCreateUserContactSelectContactTypeModalContentComponent
} from '@user-profiles/components/user-profiles-create-user-contact-select-contact-type-modal/user-profiles-create-user-contact-select-contact-type-modal-content/user-profiles-create-user-contact-select-contact-type-modal-content.component';
import {
  UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent
} from '@user-profiles/components/user-profiles-create-event-blast-and-add-event-blast-recipients/user-profiles-create-event-blast-and-add-event-blast-recipients.component';
import {
  UserProfilesGetEventBlastRecipientsByEventBlastComponent,
  UserProfilesGetEventBlastRecipientsByEventBlastNoTemplateComponent,
  UserProfilesGetEventBlastRecipientsByEventBlastScrollingComponent
} from '@user-profiles/components/user-profiles-get-event-blast-recipients-by-event-blast/user-profiles-get-event-blast-recipients-by-event-blast.component';
import {
  UserProfilesAttendeesListByEventBlastModalComponent
} from '@user-profiles/components/user-profiles-attendees-list-by-event-blast-modal/user-profiles-attendees-list-by-event-blast-modal.component';
import {
  UserProfilesAttendeesListByEventBlastModalContentComponent
} from '@user-profiles/components/user-profiles-attendees-list-by-event-blast-modal/user-profiles-attendees-list-by-event-blast-modal-content/user-profiles-attendees-list-by-event-blast-modal-content.component';
import { UserProfilesEditGroupModalComponent } from './components/user-profiles-edit-group-modal/user-profiles-edit-group-modal.component';
import { UserProfilesEditGroupModalContentComponent } from './components/user-profiles-edit-group-modal/user-profiles-edit-group-modal-content/user-profiles-edit-group-modal-content.component';

@NgModule({
  declarations: [
    UserProfilesUserProfilePageComponent,
    UserProfilesMainPageComponent,
    UserProfilesProfileEditComponent,
    UserProfilesPayoutInformationComponent,
    UserProfilesProfileEditFormComponent,
    UserProfilesProfilePastGuestsComponent,
    UserProfilesBlastsDefaultPageComponent,
    UserProfilesBlastsMainPageComponent,
    UserProfilesBlastDetailsPageComponent,
    UserProfilesPayoutInformationFormComponent,
    UserProfilesBlastsAddUploadContactModalComponent,
    UserProfilesBlastsAddUploadContactModalContentComponent,
    UserProfilesBlastsCreateNewGroupModalComponent,
    UserProfilesBlastsCreateNewGroupModalContentComponent,
    UserProfilesBlastsFilterModalComponent,
    UserProfilesBlastsFilterModalContentComponent,
    UserProfilesBlastsInviteToEventModalComponent,
    UserProfilesBlastsInviteToEventModalContentComponent,
    UserProfilesBlastDetailsContactsPageComponent,
    UserProfilesBlastDetailsBlastsPageComponent,
    UserProfilesPurchaseHistoryPageComponent,
    UserProfilesGetEventAttendessOfUserAccountComponent,
    UserProfilesBlastsCreateBlastListFormComponent,
    UserProfilesGetAllEventsComponent,
    UserProfilesBlastsInviteContactsToEventModalComponent,
    UserProfilesBlastsInviteContactsToEventModalContentComponent,
    UserProfilesBlastsInviteContactsToEventModalContentComponent,
    UserProfilesInviteToEventSliderComponent,
    UserProfilesCreateEventBlastComponent,
    UserProfilesCreateEventBlastNoTemplateComponent,
    UserProfilesStartEventBlastComponent,
    UserProfilesAddEventBlastRecipientComponent,
    UserProfilesGetEventBlastByBlastListComponent,
    UserProfilesBlastsInviteToEventSwiperComponent,
    UserProfilesCreateBlastListItemComponent,
    UserProfilesCreateBlastListItemNoTemplateComponent,
    UserProfilesCreateBlastItemFormComponent,
    UserProfilesGetUserFollowByFollowerAccountComponent,
    UserProfilesGetUserFollowByUserAccountComponent,
    UserProfilesGetUserFollowByUserAccountNoTemplateComponent,
    UserProfilesGetUserFollowByFollowerAccountNoTemplateComponent,
    UserProfilesGetEventAttendessOfUserAccountScrollingComponent,
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountNoTemplateComponent,
    UserProfilesUserFollowComponent,
    UserProfilesCreateUserFollowComponent,
    UserProfilesCreateUserFollowNoTemplateComponent,
    UserProfilesDeleteUserFollowComponent,
    UserProfilesDeleteUserFollowNoTemplateComponent,
    UserProfilesGetUserFollowByUserAccountAndFollowerAccountComponent,
    UserProfilesUserFollowNoTemplateComponent,
    UserProfilesGetEventBlastByBlastListScrollingComponent,
    BlastsGetBlastListsByUserAccountScrollingComponent,
    UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent,
    UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent,
    UserProfilesGetUserEventTicketsByUserAccountScrollingComponent,
    EventsGetUserEventTicketsByUserAccountScrollingNoTemplateComponent,
    UserProfilesGetAllUserContactsComponent,
    UserProfilesGetAllUserContactsNoTemplateComponent,
    UserProfilesCreateMultipleUserContactComponent,
    UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
    UserProfilesGetUserContactsByUserAccountComponent,
    UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
    UserProfilesBlastsFilterModalNoTemplateComponent,
    UserProfilesUserProfileDetailsModalComponent,
    UserProfilesGetUserAccountComponent,
    UserProfilesGetUserAccountNoTemplateComponent,
    UserProfilesProfileAllContactsComponent,
    UserProfilesUserContactsFromCsvSwiperModalComponent,
    UserProfilesProfileAllContactsScrollingComponent,
    UserProfilesCreateUserContactModalComponent,
    UserProfilesCreateUserContactModalContentComponent,
    UserProfilesCreatUserContactFormComponent,
    UserProfilesDeleteUserContactComponent,
    UserProfilesGetUserContactsByUserAccountScrollingComponent,
    UserProfilesUpdateUserContactFormComponent,
    UserProfilesUpdateUserContactModalComponent,
    UserProfilesUpdateUserContactModalContentComponent,
    UserProfilesCreateUserContactSelectContactTypeModalComponent,
    UserProfilesCreateUserContactSelectContactTypeModalContentComponent,
    UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent,
    UserProfilesGetEventBlastRecipientsByEventBlastComponent,
    UserProfilesGetEventBlastRecipientsByEventBlastNoTemplateComponent,
    UserProfilesAttendeesListByEventBlastModalComponent,
    UserProfilesAttendeesListByEventBlastModalContentComponent,
    UserProfilesGetEventBlastRecipientsByEventBlastScrollingComponent,
    UserProfilesEditGroupModalComponent,
    UserProfilesEditGroupModalContentComponent,

  ],
  imports: [
    CoreModule,
    ImagesModule,
    UsersModule,
    BlastsModule,
    UserProfilesCommonModule,
    RouterModule.forChild(USER_PROFILES_ROUTES),
  ],
  exports: [


    UserProfilesGetUserFollowByFollowerAccountComponent,
    UserProfilesGetUserFollowByUserAccountComponent,
    UserProfilesUserFollowComponent,
    BlastsGetBlastListsByUserAccountScrollingComponent,
    UserProfilesBlastsInviteToEventSwiperSearchContactFormComponent,
    UserProfilesCreateEventBlastNoTemplateComponent,
    UserProfilesStartEventBlastComponent,
    UserProfilesBlastsFilterModalComponent,
    UserProfilesBlastsFilterModalComponent,
    UserProfilesProfilePastGuestsComponent,
    UserProfilesGetEventAttendessOfUserAccountScrollingComponent,
    UserProfilesBlastsCreateNewGroupModalComponent,
    UserProfilesGetAllUserContactsComponent,
    UserProfilesCreateMultipleUserContactComponent,
    UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
    UserProfilesCreateBlastListAndBlastListItemsByUserContactsComponent,
    UserProfilesGetAllUserContactsNoTemplateComponent,
    UserProfilesGetUserContactsByUserAccountNoTemplateComponent,
    UserProfilesBlastsFilterModalNoTemplateComponent,
    UserProfilesCommonModule,
    UserProfilesBlastsAddUploadContactModalComponent,
    UserProfilesBlastsInviteToEventSwiperSearchEventFormComponent,
    UserProfilesCreateUserContactSelectContactTypeModalComponent,
    UserProfilesCreateEventBlastAndAddEventBlastRecipientsComponent,

  ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class UserProfilesModule {
}
