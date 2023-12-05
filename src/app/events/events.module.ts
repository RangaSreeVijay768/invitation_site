import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CoreModule} from '@core/core.module';
import {EventsHomePageComponent} from './pages/events-home-page/events-home-page.component';
import {EventsMyEventsPageComponent} from './pages/events-my-events-page/events-my-events-page.component';
import {EventsMainPageComponent} from './pages/events-main-page/events-main-page.component';
import {EventsEventDetailsPageComponent} from './pages/events-event-details-page/events-event-details-page.component';
import {
  EventsMyCreatedEventsPageComponent
} from './pages/events-my-created-events-page/events-my-created-events-page.component';
import {
  EventsMyInvitedEventsPageComponent
} from './pages/events-my-invited-events-page/events-my-invited-events-page.component';
import {
  EventsMyDraftEventsPageComponent
} from './pages/events-my-draft-events-page/events-my-draft-events-page.component';
import {
  EventsInvitedUpcomingEventsComponent
} from './components/events-invited-upcoming-events/events-invited-upcoming-events.component';
import {
  EventsMyCreatedEventsUpcomingEventsPageComponent
} from './pages/events-my-created-events-upcoming-events-page/events-my-created-events-upcoming-events-page.component';
import {
  EventsMyCreatedEventsPastEventsPageComponent
} from './pages/events-my-created-events-past-events-page/events-my-created-events-past-events-page.component';
import {
  EventsMyInvitedEventsUpcomingEventsComponent
} from './pages/events-my-invited-events-upcoming-events/events-my-invited-events-upcoming-events.component';
import {
  EventsMyInvitedEventsPastEventsPageComponent
} from './pages/events-my-invited-events-past-events-page/events-my-invited-events-past-events-page.component';
import {
  EventsGetAllEventsComponent, EventsGetAllEventsNoTemplateComponent, EventsGetAllEventsPastEventsScrollingComponent,
  EventsGetAllEventsScrollingComponent
} from './components/events-get-all-events/events-get-all-events.component';
import {
  EventsEventDetailsPaidPageComponent
} from './pages/events-event-details-paid-page/events-event-details-paid-page.component';
import {ImagesModule} from '@images/images.module';
import {UserProfilesModule} from '@app/user-profiles/user-profiles.module';
import {
  EventsBottomNavFooterComponent
} from '@events/components/events-bottom-nav-footer/events-bottom-nav-footer.component';
import {
  EventsViewAllEventsPageComponent
} from '@events/pages/events-view-all-events-page/events-view-all-events-page.component';
import {EventsRsvpFreeModalComponent} from './components/events-rsvp-free-modal/events-rsvp-free-modal.component';
import {
  EventsRsvpFreeModalContentComponent
} from './components/events-rsvp-free-modal/events-rsvp-free-modal-content/events-rsvp-free-modal-content.component';
import {
  GetEventInfoResolver, GetEventResolver, GetOrderCompleteInfoByOrderPaymentResolver
} from '@events/events.resolvers';
import {EventDashboardMainPageComponent} from './pages/event-dashboard-main-page/event-dashboard-main-page.component';
import {EventsRsvpPaidModalComponent} from './components/events-rsvp-paid-modal/events-rsvp-paid-modal.component';
import {
  EventsRsvpPaidModalContentComponent
} from './components/events-rsvp-paid-modal/events-rsvp-paid-modal-content/events-rsvp-paid-modal-content.component';
import {
  EventsGetEventInvitesByEventDatatableComponent
} from './components/events-get-event-invites-by-event/events-get-event-invites-by-event.component';
import {
  EventsGetEventLocationsByEventComponent, EventsGetEventLocationsByEventNoTemplateComponent
} from './components/events-get-event-locations-by-event/events-get-event-locations-by-event.component';
import {
  EventsViewUserProfileDetailsModalComponent, EventsViewUserProfileDetailsModalNoTemplateComponent
} from './components/events-view-user-profile-details-modal/events-view-user-profile-details-modal.component';
import {
  EventsViewUserProfileDetailsModalContentComponent
} from './components/events-view-user-profile-details-modal/events-view-user-profile-details-modal-content/events-view-user-profile-details-modal-content.component';
import {
  EventsGetAllEventInfosComponent, EventsGetAllEventInfosNoTemplateComponent,
  EventsGetAllEventInfosNoTemplateComponentScrollingComponent
} from './components/events-get-all-event-infos/events-get-all-event-infos.component';
import {
  GetEventInvitesByUserAccountComponent, GetEventInvitesByUserAccountNoTemplateComponent,
  GetEventInvitesByUserAccountScrollingComponent
} from '@events/components/events-get-event-invites-by-user-account/get-event-invites-by-user-account.component';
import {
  EventsGetEventInfoComponent, EventsGetEventInfoNoTemplateComponent
} from './components/events-get-event-info/events-get-event-info.component';
import {
  EventsGetEventsByCreatedByComponent, EventsGetEventsByCreatedByDraftEventsScrollingComponent,
  EventsGetEventsByCreatedByNoTemplateComponent, EventsGetEventsByCreatedByScrollingComponent,
} from './components/events-get-events-by-created-by/events-get-events-by-created-by.component';
import {
  EventsGetEventAttendeesCountByUserAccountComponent, EventsGetEventAttendeesCountByUserAccountNoTemplateComponent
} from './components/events-get-event-attendees-count-by-user-account/events-get-event-attendees-count-by-user-account.component';
import {EventsCreateEventFormComponent} from './components/events-create-event-form/events-create-event-form.component';
import {
  EventsCreateEventCreatePaidTicketModalComponent
} from './components/events-create-event-create-paid-ticket-modal/events-create-event-create-paid-ticket-modal.component';
import {
  EventsCreateEventCreatePaidTicketModalContentComponent
} from './components/events-create-event-create-paid-ticket-modal/events-create-event-create-paid-ticket-modal-content/events-create-event-create-paid-ticket-modal-content.component';
import {
  EventsCreateEventFreeTicketModalComponent
} from './components/events-create-event-free-ticket-modal/events-create-event-free-ticket-modal.component';
import {
  EventsCreateEventFreeTicketModalContentComponent
} from './components/events-create-event-free-ticket-modal/events-create-event-free-ticket-modal-content/events-create-event-free-ticket-modal-content.component';
import {
  EventsCreateEventFreeTicketFormComponent
} from './components/events-create-event-free-ticket-form/events-create-event-free-ticket-form.component';
import {
  EventsCreateEventPaidTicketFormComponent
} from './components/events-create-event-paid-ticket-form/events-create-event-paid-ticket-form.component';
import {EventsShareEventPageComponent} from './pages/events-share-event-page/events-share-event-page.component';
import {
  EventsEventDashboardCreatorDashboardPageComponent
} from './pages/events-event-dashboard-creator-dashboard-page/events-event-dashboard-creator-dashboard-page.component';
import {
  EventsEventDashboardEventDetailsPageComponent
} from './pages/events-event-dashboard-event-details-page/events-event-dashboard-event-details-page.component';
import {
  EventsEventDashboardGuestDetailsMainPageComponent
} from './pages/events-event-dashboard-guest-details-main-page/events-event-dashboard-guest-details-main-page.component';
import {
  EventsEventDashboardGuestDetailsAllGuestsPageComponent
} from '@events/pages/events-event-dashboard-guest-details-all-guests-page/events-event-dashboard-guest-details-all-guests-page.component';
import {
  EventsEventDashboardGuestDetailsRefundRequestsPageComponent
} from './pages/events-event-dashboard-guest-details-refund-requests-page/events-event-dashboard-guest-details-refund-requests-page.component';
import {
  EventsEventDashboardManageGuestListMainPageComponent
} from './pages/events-event-dashboard-manage-guest-list-main-page/events-event-dashboard-manage-guest-list-main-page.component';
import {
  EventsEventDashboardManageGuestListAllGuestsComponent
} from './pages/events-event-dashboard-manage-guest-list-all-guests/events-event-dashboard-manage-guest-list-all-guests.component';
import {
  EventsEventDashboardTicketDetailsMainPageComponent
} from './pages/events-event-dashboard-ticket-details-main-page/events-event-dashboard-ticket-details-main-page.component';
import {
  EventsEventDashboardTicketDetailsTicketTypePageComponent
} from './pages/events-event-dashboard-ticket-details-ticket-type-page/events-event-dashboard-ticket-details-ticket-type-page.component';
import {
  EventsEventDashboardTicketDetailsPromocodesPageComponent
} from './pages/events-event-dashboard-ticket-details-promocodes-page/events-event-dashboard-ticket-details-promocodes-page.component';
import {
  EventsCreateEventEventCreationPageComponent
} from './pages/events-create-event-event-creation-page/events-create-event-event-creation-page.component';
import {
  EventsCreateEventAddTicketMainPageComponent
} from './pages/events-create-event-add-ticket-main-page/events-create-event-add-ticket-main-page.component';
import {
  EventsCreateEventAddTicketPromocodesPageComponent
} from './pages/events-create-event-add-ticket-promocodes-page/events-create-event-add-ticket-promocodes-page.component';
import {
  EventsCreateEventAddTicketTicketTypePageComponent
} from './pages/events-create-event-add-ticket-ticket-type-page/events-create-event-add-ticket-ticket-type-page.component';
import {
  EventsCreateEventCreateTicketPageComponent
} from './pages/events-create-event-create-ticket-page/events-create-event-create-ticket-page.component';
import {EventsEventLocationToHumanReadablePipe, EventsEventPromoCodeTypeToHumanReadablePipe, EventsPipe} from './events.pipe';
import {
  EventsGetEventPromoCodesByEventComponent, EventsGetEventPromoCodesByEventDatatableComponent,
  EventsGetEventPromoCodesByEventNoTemplateComponent
} from './components/events-get-event-promo-codes-by-event/events-get-event-promo-codes-by-event.component';
import {
  EventsGetEventAttendeesOfUserAccountComponent, EventsGetEventAttendeesOfUserAccountNoTemplateComponent,
  EventsGetEventAttendeesOfUserAccountScrollingComponent
} from './components/events-get-event-attendees-of-user-account/events-get-event-attendees-of-user-account.component';
import {
  EventsMyCreatedEventsUpcomingEventsScrollingComponent
} from './components/events-my-created-events-upcoming-events-scrolling/events-my-created-events-upcoming-events-scrolling.component';
import {
  EventsEventDashboardPromocodesCreateCodeModalComponent
} from './components/events-event-dashboard-promocodes-create-code-modal/events-event-dashboard-promocodes-create-code-modal.component';
import {
  EventsEventDashboardPromocodesCreateCodeModalContentComponent
} from './components/events-event-dashboard-promocodes-create-code-modal/events-event-dashboard-promocodes-create-code-modal-content/events-event-dashboard-promocodes-create-code-modal-content.component';
import {
  EventsEventDashboardPromocodesCreateCodeFormComponent
} from './components/events-event-dashboard-promocodes-create-code-form/events-event-dashboard-promocodes-create-code-form.component';
import {EventsPremiumPlansPageComponent} from './pages/events-premium-plans-page/events-premium-plans-page.component';
import {BlastsModule} from '@app/blasts/blasts.module';
import {
  EventsGetAllEventCategoriesComponent, EventsGetAllEventCategoriesNoTemplateComponent
} from './components/events-get-all-event-categories/events-get-all-event-categories.component';
import {
  EventsGetEventAttendeesComponent, EventsGetEventAttendeesNoTemplateComponent
} from './components/events-get-event-attendees/events-get-event-attendees.component';
import {UsersModule} from '@users/users.module';
import {
  EventsCreateEventPromoCodeComponent, EventsCreateEventPromoCodeNoTemplateComponent
} from './components/events-create-event-promo-code/events-create-event-promo-code.component';
import {
  EventsGetAllEventsFilterComponent
} from './components/events-get-all-events-filter/events-get-all-events-filter.component';
import {SearchModule} from '@app/search/search.module';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import {
  EventsSearchEventInfosAutoCompleteFormControlComponent
} from '@events/components/events-search-event-infos-auto-complete-form-control/events-search-event-infos-auto-complete-form-control.component';
import {
  EventsGetEventInviteAndEventInfosByUserAccountComponent,
  EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent,
  EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent
} from './components/events-get-event-invite-and-event-infos-by-user-account/events-get-event-invite-and-event-infos-by-user-account.component';
import {EventsEditEventPageComponent} from './pages/events-edit-event-page/events-edit-event-page.component';
import {
  EventsEditEventFormComponent, EventsEditEventFormNoTemplateComponent
} from './components/events-edit-event-form/events-edit-event-form.component';
import {
  EventsEventMainBlankPageComponent
} from './pages/events-event-main-blank-page/events-event-main-blank-page.component';
import {
  EventsGetEventInviteAndUserEventInfosByUserAccountComponent,
  EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent,
  EventsGetEventInviteAndUserEventInfosByUserAccountScrollingComponent
} from './components/events-get-event-invite-and-user-event-infos-by-user-account/events-get-event-invite-and-user-event-infos-by-user-account.component';
import {
  EventsSearchEventInfosComponent, EventsSearchEventInfosNoTemplateComponent, EventsSearchEventInfosScrollingComponent
} from '@events/components/events-search-event-infos/events-search-event-infos.component';
import {EventsPublishEventComponent} from './components/events-publish-event/events-publish-event.component';
import {
  EventsShowGuestListCountVisibilityComponent
} from './components/events-show-guest-list-count-visibility/events-show-guest-list-count-visibility.component';
import {
  EventsRemoveGuestListCountVisibilityComponent
} from './components/events-remove-guest-list-count-visibility/events-remove-guest-list-count-visibility.component';
import {
  EventsGuestListCountVisibilityComponent
} from './components/events-guest-list-count-visibility/events-guest-list-count-visibility.component';
import {
  EventsEditTicketModalComponent
} from '@events/components/events-edit-ticket-modal/events-edit-ticket-modal.component';
import {
  EventsEditTicketModalContentComponent
} from '@events/components/events-edit-ticket-modal/events-edit-ticket-modal-content/events-edit-ticket-modal-content.component';
import {
  EventsEditEventTicketFormComponent
} from '@events/components/events-edit-event-ticket-form/events-edit-event-ticket-form.component';
import {
  EventsGetUserEventTicketsByUserAccountComponent, EventsGetUserEventTicketsByUserAccountNoTemplateComponent,
  EventsGetUserEventTicketsByUserAccountScrollingComponent
} from './components/events-get-user-event-tickets-by-user-account/events-get-user-event-tickets-by-user-account.component';
import {
  EventsAddCoHostStatusComponent, EventsAddCoHostStatusNoTemplateComponent
} from './components/events-add-co-host-status/events-add-co-host-status.component';
import {
  EventsRemoveCoHostStatusComponent, EventsRemoveCoHostStatusNoTemplateComponent
} from './components/events-remove-co-host-status/events-remove-co-host-status.component';
import {
  EventsCheckInEventAttendeeComponent, EventsCheckInEventAttendeeNoTemplateComponent
} from './components/events-check-in-event-attendee/events-check-in-event-attendee.component';
import {
  EventsCoHostStatusFormComponent
} from './components/events-co-host-status-form/events-co-host-status-form.component';
import {
  EventsGetOrderItemsCountByEventTicketComponent, EventsGetOrderItemsCountByEventTicketNoTemplateComponent
} from './components/events-get-order-items-count-by-event-ticket/events-get-order-items-count-by-event-ticket.component';
import {
  EventsGetUserEventTicketsCountByEventComponent, EventsGetUserEventTicketsCountByEventNoTemplateComponent
} from './components/events-get-user-event-tickets-count-by-event/events-get-user-event-tickets-count-by-event.component';
import {
  EventsSetEventMetaDataComponent, EventsSetEventMetaDataNoTemplateComponent
} from './components/events-set-event-meta-data/events-set-event-meta-data.component';
import {
  EventsInviteToEventInShareEventModalComponent
} from './components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal.component';
import {
  EventsInviteToEventInShareEventModalContentComponent
} from './components/events-invite-to-event-in-share-event-modal/events-invite-to-event-in-share-event-modal-content/events-invite-to-event-in-share-event-modal-content.component';
import {
  EventsInviteToEventInShareEventSwiperComponent
} from './components/events-invite-to-event-in-share-event-swiper/events-invite-to-event-in-share-event-swiper.component';
import {
  EventsInvitePastAttendeesInShareEventModalComponent
} from './components/events-invite-past-attendees-in-share-event-modal/events-invite-past-attendees-in-share-event-modal.component';
import {
  EventsInvitePastAttendeesInShareEventModalContentComponent
} from './components/events-invite-past-attendees-in-share-event-modal/events-invite-past-attendees-in-share-event-modal-content/events-invite-past-attendees-in-share-event-modal-content.component';
import {
  EventsInvitePastAttendeesInShareEventSwiperComponent
} from './components/events-invite-past-attendees-in-share-event-swiper/events-invite-past-attendees-in-share-event-swiper.component';
import {
  EventPastAttendeesGetEventAttendeesOfUserAccountScrolling,
  EventsPastAttendeesGetEventAttendeesOfUserAccountComponent
} from './components/events-past-attendees-get-event-attendees-of-user-account/events-past-attendees-get-event-attendees-of-user-account.component';
import {
  EventsGetUserEventTicketsByEventComponent, EventsGetUserEventTicketsByEventNoTemplateComponent
} from './components/events-get-user-event-tickets-by-event/events-get-user-event-tickets-by-event.component';
import {
  EventsCreateEventTicketAndEventTicketSaleItemFormComponent
} from './components/events-create-event-ticket-and-event-ticket-sale-item-form/events-create-event-ticket-and-event-ticket-sale-item-form.component';
import {
  EventsGetEventTicketsSaleSumByEventComponent, EventsGetEventTicketsSaleSumByEventNoTemplateComponent
} from './components/events-get-event-tickets-sale-sum-by-event/events-get-event-tickets-sale-sum-by-event.component';
import {
  EventsEventDashboardTicketDetailsTicketSalesPageComponent
} from './pages/events-event-dashboard-ticket-details-ticket-sales-page/events-event-dashboard-ticket-details-ticket-sales-page.component';
import {
  EventsGetEventTicketInfoByEventComponent, EventsGetEventTicketInfoByEventNoTemplateComponent
} from './components/events-get-event-ticket-info-by-event/events-get-event-ticket-info-by-event.component';
import {
  EventsSelectBlastListForShareEventComponent
} from './components/events-select-blast-list-for-share-event/events-select-blast-list-for-share-event.component';
import {
  EventsCreateEventInvitesByEventAndUserAccountsComponent
} from './components/events-create-event-invites-by-event-and-user-accounts/events-create-event-invites-by-event-and-user-accounts.component';
import {
  EventsEventPurchaseDetailsPageComponent
} from './pages/events-event-purchase-details-page/events-event-purchase-details-page.component';
import {
  EventsCreateEventInviteComponent
} from './components/events-create-event-invite/events-create-event-invite.component';
import {
  EventsSelectContactForShareEventComponent
} from './components/events-select-contact-for-share-event/events-select-contact-for-share-event.component';
import {
  EventsOrderPaymentDetailsPageComponent
} from './pages/events-order-payment-details-page/events-order-payment-details-page.component';
import {
  EventsCreateMultipleUserContactsCsvComponent
} from './components/events-create-multiple-user-contacts-csv/events-create-multiple-user-contacts-csv.component';
import {
  EventsUploadCsvPreviewSummaryModalComponent
} from './components/events-upload-csv-preview-summary-modal/events-upload-csv-preview-summary-modal.component';
import {
  EventsUploadCsvPreviewSummaryModalContentComponent
} from './components/events-upload-csv-preview-summary-modal/events-upload-csv-preview-summary-modal-content/events-upload-csv-preview-summary-modal-content.component';
import {
  EventsUploadCsvPreviewSummarySwiperComponent
} from './components/events-upload-csv-preview-summary-swiper/events-upload-csv-preview-summary-swiper.component';
import {
  EventsUploadCsvPreviewSwiperComponent
} from './components/events-upload-csv-preview-swiper/events-upload-csv-preview-swiper.component';
import {
  EventsShareEventMassMessagingModalComponent
} from './components/events-share-event-mass-messaging-modal/events-share-event-mass-messaging-modal.component';
import {
  EventsShareEventMassMessagingModalContentComponent
} from './components/events-share-event-mass-messaging-modal/events-share-event-mass-messaging-modal-content/events-share-event-mass-messaging-modal-content.component';
import {RouterModule} from "@angular/router";
import {EVENTS_ROUTES} from "@events/events.routes";
import {EventsCommonModule} from "@events/events.common.module";
import {
  EventsUploadUserContactsFromCsvSwiperModalComponent, EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent
} from './components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal.component';
import { EventsUploadUserContactsFromCsvSwiperModalContentComponent } from './components/events-upload-user-contacts-from-csv-swiper-modal/events-upload-user-contacts-from-csv-swiper-modal-content/events-upload-user-contacts-from-csv-swiper-modal-content.component';
import {
  EventsUploadUserContactsFromCsvSwiperComponent
} from "@events/components/events-upload-user-contacts-from-csv-swiper/events-upload-user-contacts-from-csv-swiper.component";
import { EventsReadUserContactsCsvComponent } from './components/events-read-user-contacts-csv/events-read-user-contacts-csv.component';
import { EventsMapUserContactsCsvHeadersFormComponent } from './components/events-map-user-contacts-csv-headers-form/events-map-user-contacts-csv-headers-form.component';
import {EventsGetEventInvitationCodeComponent,
  EventsGetEventInvitationCodeNoTemplateComponent
} from '@events/components/events-get-event-invitation-code/events-get-event-invitation-code.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {
  EventsCreateEventInviteByEventAndUserAccountFormComponent
} from '@events/components/events-create-event-invite-by-event-and-user-account-form/events-create-event-invite-by-event-and-user-account-form.component';
import {
  EventsEventDashboardAllInvitesPageComponent
} from '@events/pages/events-event-dashboard-all-invites-page/events-event-dashboard-all-invites-page.component';
import {
  EventsLocationAvailabilityStatusFormComponent
} from '@events/components/events-location-availability-status-form/events-location-availability-status-form.component';
import {
  EventsAddLocationAvailabilityStatusComponent, EventsAddLocationAvailabilityStatusNoTemplateComponent
} from '@events/components/events-add-location-availability-status/events-add-location-availability-status.component';
import {
  EventsRemoveLocationAvailabilityStatusComponent, EventsRemoveLocationAvailabilityStatusNoTemplateComponent
} from '@events/components/events-remove-location-availability-status/events-remove-location-availability-status.component';
import {
  EventsCreatePaidTicketWhatAreFeesModalComponent
} from "@events/components/events-create-paid-ticket-what-are-fees-modal/events-create-paid-ticket-what-are-fees-modal.component";
import {
  EventsCreatePaidTicketWhatAreFeesModalContentComponent
} from "@events/components/events-create-paid-ticket-what-are-fees-modal/events-create-paid-ticket-what-are-fees-modal-content/events-create-paid-ticket-what-are-fees-modal-content.component";
import { EventsShareEventConfirmationModalComponent } from './components/events-share-event-confirmation-modal/events-share-event-confirmation-modal.component';
import { EventsShareEventConfirmationModalContentComponent } from './components/events-share-event-confirmation-modal/events-share-event-confirmation-modal-content/events-share-event-confirmation-modal-content.component';



@NgModule({
  declarations: [
    EventsHomePageComponent,
    EventsMyEventsPageComponent,
    EventsMainPageComponent,
    EventsEventDetailsPageComponent,
    EventsMyCreatedEventsPageComponent,
    EventsMyInvitedEventsPageComponent,
    EventsMyDraftEventsPageComponent,
    EventsInvitedUpcomingEventsComponent,
    EventsMyCreatedEventsUpcomingEventsPageComponent,
    EventsMyCreatedEventsPastEventsPageComponent,
    EventsMyInvitedEventsUpcomingEventsComponent,
    EventsMyInvitedEventsPastEventsPageComponent,
    EventsGetAllEventsComponent,
    EventsGetAllEventsNoTemplateComponent,
    EventsEventDetailsPaidPageComponent,


    EventsBottomNavFooterComponent,
    EventsViewAllEventsPageComponent,
    EventsRsvpFreeModalComponent,
    EventsRsvpFreeModalContentComponent,
    EventDashboardMainPageComponent,
    EventsRsvpPaidModalComponent,
    EventsRsvpPaidModalContentComponent,


    EventsGetEventInvitesByEventDatatableComponent,
    EventsGetEventLocationsByEventComponent,
    EventsGetEventLocationsByEventNoTemplateComponent,
    EventsViewUserProfileDetailsModalComponent,
    EventsViewUserProfileDetailsModalContentComponent,
    EventsViewUserProfileDetailsModalNoTemplateComponent,


    EventsGetAllEventInfosComponent,
    EventsGetAllEventInfosNoTemplateComponent,
    GetEventInvitesByUserAccountComponent,
    GetEventInvitesByUserAccountNoTemplateComponent,


    EventsGetEventInfoComponent,
    EventsGetEventInfoNoTemplateComponent,
    EventsGetEventsByCreatedByComponent,
    EventsGetEventsByCreatedByNoTemplateComponent,
    EventsGetEventAttendeesCountByUserAccountComponent,
    EventsGetEventAttendeesCountByUserAccountNoTemplateComponent,
    EventsCreateEventFormComponent,
    EventsCreateEventCreatePaidTicketModalComponent,
    EventsCreateEventCreatePaidTicketModalContentComponent,
    EventsCreateEventFreeTicketModalComponent,
    EventsCreateEventFreeTicketModalContentComponent,
    EventsCreateEventFreeTicketFormComponent,
    EventsCreateEventPaidTicketFormComponent,
    EventsShareEventPageComponent,
    EventsEventDashboardCreatorDashboardPageComponent,
    EventsEventDashboardEventDetailsPageComponent,
    EventsEventDashboardGuestDetailsMainPageComponent,
    EventsEventDashboardGuestDetailsAllGuestsPageComponent,
    EventsEventDashboardGuestDetailsRefundRequestsPageComponent,
    EventsEventDashboardManageGuestListMainPageComponent,
    EventsEventDashboardManageGuestListAllGuestsComponent,
    EventsEventDashboardTicketDetailsMainPageComponent,
    EventsEventDashboardTicketDetailsTicketTypePageComponent,
    EventsEventDashboardTicketDetailsPromocodesPageComponent,
    EventsCreateEventEventCreationPageComponent,
    EventsCreateEventAddTicketMainPageComponent,
    EventsCreateEventAddTicketPromocodesPageComponent,
    EventsCreateEventAddTicketTicketTypePageComponent,
    EventsCreateEventCreateTicketPageComponent,


    EventsPipe,
    EventsGetEventPromoCodesByEventComponent,
    EventsGetEventPromoCodesByEventNoTemplateComponent,
    EventsGetEventPromoCodesByEventDatatableComponent,


    EventsGetEventAttendeesOfUserAccountComponent,
    EventsGetEventAttendeesOfUserAccountNoTemplateComponent,
    EventsMyCreatedEventsUpcomingEventsScrollingComponent,
    GetEventInvitesByUserAccountScrollingComponent,
    EventsEventDashboardPromocodesCreateCodeModalComponent,
    EventsEventDashboardPromocodesCreateCodeModalContentComponent,
    EventsEventDashboardPromocodesCreateCodeFormComponent,
    EventsPremiumPlansPageComponent,


    EventsPremiumPlansPageComponent,
    EventsGetAllEventCategoriesComponent,
    EventsGetAllEventCategoriesNoTemplateComponent,
    EventsGetEventAttendeesNoTemplateComponent,
    EventsGetEventAttendeesComponent,


    EventsCreateEventPromoCodeComponent,
    EventsCreateEventPromoCodeNoTemplateComponent,
    EventsGetAllEventInfosNoTemplateComponentScrollingComponent,
    EventsGetEventsByCreatedByScrollingComponent,
    EventsGetAllEventsScrollingComponent,
    EventsGetAllEventsFilterComponent,

    EventsSearchEventInfosAutoCompleteFormControlComponent,


    EventsGetEventAttendeesOfUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountComponent,
    EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent,
    EventsEditEventPageComponent,
    EventsEditEventFormComponent,
    EventsEventMainBlankPageComponent,
    EventsEditTicketModalComponent,
    EventsEditTicketModalContentComponent,
    EventsEditEventTicketFormComponent,
    EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent,
    EventsGetEventInviteAndUserEventInfosByUserAccountComponent,
    EventsGetEventInviteAndUserEventInfosByUserAccountNoTemplateComponent,
    EventsGetEventInviteAndUserEventInfosByUserAccountScrollingComponent,
    EventsSearchEventInfosScrollingComponent,
    EventsSearchEventInfosNoTemplateComponent,
    EventsPublishEventComponent,
    EventsShowGuestListCountVisibilityComponent,
    EventsRemoveGuestListCountVisibilityComponent,
    EventsGuestListCountVisibilityComponent,
    EventsEventPromoCodeTypeToHumanReadablePipe,
    EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent,
    EventsGetEventsByCreatedByDraftEventsScrollingComponent,
    EventsGetAllEventsPastEventsScrollingComponent,
    EventsGetUserEventTicketsByUserAccountComponent,
    EventsGetUserEventTicketsByUserAccountNoTemplateComponent,
    EventsGetUserEventTicketsByUserAccountScrollingComponent,
    EventsAddCoHostStatusComponent,
    EventsRemoveCoHostStatusComponent,
    EventsCheckInEventAttendeeComponent,
    EventsSearchEventInfosComponent,
    EventsCoHostStatusFormComponent,
    EventsAddCoHostStatusNoTemplateComponent,
    EventsRemoveCoHostStatusNoTemplateComponent,
    EventsGetOrderItemsCountByEventTicketComponent,
    EventsGetOrderItemsCountByEventTicketNoTemplateComponent,
    EventsGetUserEventTicketsCountByEventComponent,
    EventsGetUserEventTicketsCountByEventNoTemplateComponent,
    EventsSetEventMetaDataComponent,
    EventsSetEventMetaDataNoTemplateComponent,

    EventsInviteToEventInShareEventModalComponent,
    EventsInviteToEventInShareEventModalContentComponent,
    EventsInviteToEventInShareEventSwiperComponent,
    EventsInvitePastAttendeesInShareEventModalComponent,
    EventsInvitePastAttendeesInShareEventModalContentComponent,
    EventsInvitePastAttendeesInShareEventSwiperComponent,
    EventsPastAttendeesGetEventAttendeesOfUserAccountComponent,
    EventPastAttendeesGetEventAttendeesOfUserAccountScrolling,
    EventsGetUserEventTicketsByEventComponent,
    EventsGetUserEventTicketsByEventNoTemplateComponent,
    EventsCreateEventTicketAndEventTicketSaleItemFormComponent,
    EventsGetEventTicketsSaleSumByEventComponent,
    EventsGetEventTicketsSaleSumByEventNoTemplateComponent,
    EventsEventDashboardTicketDetailsTicketSalesPageComponent,
    EventsGetEventTicketInfoByEventComponent,
    EventsGetEventTicketInfoByEventNoTemplateComponent,
    EventsSelectBlastListForShareEventComponent,
    EventsCreateEventInvitesByEventAndUserAccountsComponent,
    EventsEventPurchaseDetailsPageComponent,
    EventsInviteToEventInShareEventSwiperComponent,
    EventsCreateEventInviteComponent,
    EventsSelectContactForShareEventComponent,
    EventsOrderPaymentDetailsPageComponent,
    EventsCreateMultipleUserContactsCsvComponent,
    EventsUploadCsvPreviewSummaryModalComponent,
    EventsUploadCsvPreviewSummaryModalContentComponent,
    EventsUploadCsvPreviewSummarySwiperComponent,
    EventsUploadCsvPreviewSwiperComponent,
    EventsCheckInEventAttendeeNoTemplateComponent,
    EventsEditEventFormNoTemplateComponent,
    EventsShareEventMassMessagingModalComponent,
    EventsShareEventMassMessagingModalContentComponent,
    EventsUploadUserContactsFromCsvSwiperModalComponent,
    EventsUploadUserContactsFromCsvSwiperModalContentComponent,
    EventsUploadUserContactsFromCsvSwiperComponent,
    EventsReadUserContactsCsvComponent,
    EventsMapUserContactsCsvHeadersFormComponent,
    EventsGetEventInvitationCodeComponent,
    EventsGetEventInvitationCodeNoTemplateComponent,
    EventsUploadUserContactsFromCsvSwiperModalNoTemplateComponent,
    EventsCreateEventInviteByEventAndUserAccountFormComponent,
    EventsEventDashboardAllInvitesPageComponent,
    EventsLocationAvailabilityStatusFormComponent,
    EventsAddLocationAvailabilityStatusComponent,
    EventsRemoveLocationAvailabilityStatusComponent,
    EventsAddLocationAvailabilityStatusNoTemplateComponent,
    EventsRemoveLocationAvailabilityStatusNoTemplateComponent,
    EventsCreatePaidTicketWhatAreFeesModalComponent,
    EventsCreatePaidTicketWhatAreFeesModalContentComponent,
    EventsShareEventConfirmationModalComponent,
    EventsShareEventConfirmationModalContentComponent
  ],
  imports: [
    CoreModule,
    ImagesModule,
    UserProfilesModule,
    BlastsModule,
    UsersModule,
    SearchModule,
    AutocompleteLibModule,
    EventsCommonModule,
    RouterModule.forChild(EVENTS_ROUTES),
    GoogleMapsModule
  ],
  exports: [
    EventsGetAllEventsComponent,
    EventsGetAllEventsNoTemplateComponent,
    EventsGetAllEventInfosNoTemplateComponent,
    EventsBottomNavFooterComponent,
    EventsGetEventAttendeesOfUserAccountNoTemplateComponent,
    EventsGetEventAttendeesOfUserAccountComponent,
    EventsGetAllEventInfosNoTemplateComponentScrollingComponent,
    EventsSearchEventInfosAutoCompleteFormControlComponent,
    EventsGetAllEventCategoriesComponent,
    EventsGetEventAttendeesOfUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent,
    GetEventInvitesByUserAccountScrollingComponent,
    EventsGetEventAttendeesOfUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountScrollingComponent,
    EventsGetEventInviteAndEventInfosByUserAccountNoTemplateComponent,
    GetEventInvitesByUserAccountScrollingComponent,
    EventsSearchEventInfosScrollingComponent,
    EventsSearchEventInfosNoTemplateComponent,
    EventsSetEventMetaDataNoTemplateComponent,
    EventsViewUserProfileDetailsModalNoTemplateComponent,
    EventsCreateMultipleUserContactsCsvComponent,
    EventsViewUserProfileDetailsModalComponent,
    EventsCommonModule,
    EventsUploadUserContactsFromCsvSwiperModalComponent,

  ],
  providers: [
    GetEventResolver,
    GetEventInfoResolver,
    GetOrderCompleteInfoByOrderPaymentResolver
    // GetUserEventInfoResolver
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class EventsModule {
}


