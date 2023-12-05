import {Routes} from '@angular/router';
import {EventsHomePageComponent} from '@events/pages/events-home-page/events-home-page.component';
import {EventsMyEventsPageComponent} from '@events/pages/events-my-events-page/events-my-events-page.component';
import {
    EventsEventDetailsPageComponent
} from '@events/pages/events-event-details-page/events-event-details-page.component';
import {
    EventsMyInvitedEventsPageComponent
} from '@events/pages/events-my-invited-events-page/events-my-invited-events-page.component';
import {
    EventsMyCreatedEventsPageComponent
} from '@events/pages/events-my-created-events-page/events-my-created-events-page.component';
import {
    EventsMyDraftEventsPageComponent
} from '@events/pages/events-my-draft-events-page/events-my-draft-events-page.component';
import {
    EventsMyCreatedEventsUpcomingEventsPageComponent
} from '@events/pages/events-my-created-events-upcoming-events-page/events-my-created-events-upcoming-events-page.component';
import {
    EventsMyCreatedEventsPastEventsPageComponent
} from '@events/pages/events-my-created-events-past-events-page/events-my-created-events-past-events-page.component';
import {
    EventsMyInvitedEventsPastEventsPageComponent
} from '@events/pages/events-my-invited-events-past-events-page/events-my-invited-events-past-events-page.component';
import {
    EventsMyInvitedEventsUpcomingEventsComponent
} from '@events/pages/events-my-invited-events-upcoming-events/events-my-invited-events-upcoming-events.component';

import {
    EventsEventDetailsPaidPageComponent
} from '@events/pages/events-event-details-paid-page/events-event-details-paid-page.component';
import {
    GetEventInfoResolver, GetOrderCompleteInfoByOrderPaymentResolver, GetUserEventInfoResolver
} from '@events/events.resolvers';
import {
    EventDashboardMainPageComponent
} from '@events/pages/event-dashboard-main-page/event-dashboard-main-page.component';
import {EventsShareEventPageComponent} from '@events/pages/events-share-event-page/events-share-event-page.component';
import {
    EventsEventDashboardCreatorDashboardPageComponent
} from '@events/pages/events-event-dashboard-creator-dashboard-page/events-event-dashboard-creator-dashboard-page.component';
import {
    EventsEventDashboardEventDetailsPageComponent
} from '@events/pages/events-event-dashboard-event-details-page/events-event-dashboard-event-details-page.component';
import {
    EventsEventDashboardGuestDetailsMainPageComponent
} from '@events/pages/events-event-dashboard-guest-details-main-page/events-event-dashboard-guest-details-main-page.component';
import {
    EventsEventDashboardGuestDetailsAllGuestsPageComponent
} from '@events/pages/events-event-dashboard-guest-details-all-guests-page/events-event-dashboard-guest-details-all-guests-page.component';
import {
    EventsEventDashboardGuestDetailsRefundRequestsPageComponent
} from '@events/pages/events-event-dashboard-guest-details-refund-requests-page/events-event-dashboard-guest-details-refund-requests-page.component';
import {
    EventsEventDashboardManageGuestListAllGuestsComponent
} from '@events/pages/events-event-dashboard-manage-guest-list-all-guests/events-event-dashboard-manage-guest-list-all-guests.component';
import {
    EventsEventDashboardManageGuestListMainPageComponent
} from '@events/pages/events-event-dashboard-manage-guest-list-main-page/events-event-dashboard-manage-guest-list-main-page.component';
import {
    EventsEventDashboardTicketDetailsMainPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-main-page/events-event-dashboard-ticket-details-main-page.component';
import {
    EventsEventDashboardTicketDetailsPromocodesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-promocodes-page/events-event-dashboard-ticket-details-promocodes-page.component';
import {
    EventsEventDashboardTicketDetailsTicketTypePageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-type-page/events-event-dashboard-ticket-details-ticket-type-page.component';
import {
    EventsCreateEventEventCreationPageComponent
} from '@events/pages/events-create-event-event-creation-page/events-create-event-event-creation-page.component';
import {
    EventsCreateEventAddTicketMainPageComponent
} from '@events/pages/events-create-event-add-ticket-main-page/events-create-event-add-ticket-main-page.component';
import {
    EventsCreateEventAddTicketPromocodesPageComponent
} from '@events/pages/events-create-event-add-ticket-promocodes-page/events-create-event-add-ticket-promocodes-page.component';
import {
    EventsCreateEventAddTicketTicketTypePageComponent
} from '@events/pages/events-create-event-add-ticket-ticket-type-page/events-create-event-add-ticket-ticket-type-page.component';
import {
    EventsCreateEventCreateTicketPageComponent
} from '@events/pages/events-create-event-create-ticket-page/events-create-event-create-ticket-page.component';
import {
    EventsPremiumPlansPageComponent
} from '@events/pages/events-premium-plans-page/events-premium-plans-page.component';
import {
    EventsGetAllEventsFilterComponent
} from '@events/components/events-get-all-events-filter/events-get-all-events-filter.component';
import {EventsEditEventPageComponent} from '@events/pages/events-edit-event-page/events-edit-event-page.component';
import {
    EventsEventMainBlankPageComponent
} from '@events/pages/events-event-main-blank-page/events-event-main-blank-page.component';
import {
    EventsOrderPaymentDetailsPageComponent
} from '@events/pages/events-order-payment-details-page/events-order-payment-details-page.component';
import {
    EventsEventDashboardTicketDetailsTicketSalesPageComponent
} from '@events/pages/events-event-dashboard-ticket-details-ticket-sales-page/events-event-dashboard-ticket-details-ticket-sales-page.component';
import {
    EventsEventPurchaseDetailsPageComponent
} from '@events/pages/events-event-purchase-details-page/events-event-purchase-details-page.component';
import {EventsMainPageComponent} from "@events/pages/events-main-page/events-main-page.component";
import {
  EventsEventDashboardAllInvitesPageComponent
} from '@events/pages/events-event-dashboard-all-invites-page/events-event-dashboard-all-invites-page.component';

export const EVENTS_ROUTES: Routes = [
    {
        path: '', component: EventsMainPageComponent, children: [
            {path: 'homepage', component: EventsHomePageComponent},
            {path: 'paymentsuccessful', component: EventsEventPurchaseDetailsPageComponent},
            {path: 'allevents', component: EventsGetAllEventsFilterComponent},
            {
                path: 'myevents', component: EventsMyEventsPageComponent, children: [
                    {
                        path: '', component: EventsMyInvitedEventsPageComponent,
                        children: [

                            {path: 'upcoming', component: EventsMyInvitedEventsUpcomingEventsComponent},
                            {path: 'past', component: EventsMyInvitedEventsPastEventsPageComponent},
                            {path: '', pathMatch: 'full', redirectTo: 'upcoming'}
                        ]
                    },
                    {
                        path: 'invited', component: EventsMyInvitedEventsPageComponent,
                        children: [
                            {path: 'upcoming', component: EventsMyInvitedEventsUpcomingEventsComponent},
                            {path: 'past', component: EventsMyInvitedEventsPastEventsPageComponent},
                            {path: '', pathMatch: 'full', redirectTo: 'upcoming'}

                        ]
                    },
                    {
                        path: 'created', component: EventsMyCreatedEventsPageComponent,
                        children: [
                            {path: 'upcoming', component: EventsMyCreatedEventsUpcomingEventsPageComponent},
                            {path: 'past', component: EventsMyCreatedEventsPastEventsPageComponent},
                            {path: 'draft', component: EventsMyDraftEventsPageComponent},
                            {path: '', pathMatch: 'full', redirectTo: 'upcoming'}
                        ]
                    },
                ]
            },
            {
                path: 'payments/:orderPaymentId',
                component: EventsOrderPaymentDetailsPageComponent,
                resolve: {orderCompleteInfo: GetOrderCompleteInfoByOrderPaymentResolver}
            },
            {path: 'paideventdetails', component: EventsEventDetailsPaidPageComponent},
            {
                path: 'eventdashboard/:eventId',
                resolve: {eventInfo: GetEventInfoResolver},
                component: EventDashboardMainPageComponent, children: [
                    {path: 'creatordashboard', component: EventsEventDashboardCreatorDashboardPageComponent},
                    {path: 'eventdetails', component: EventsEventDashboardEventDetailsPageComponent},
                    {
                        path: 'ticketdetails', component: EventsEventDashboardTicketDetailsMainPageComponent,
                        children: [
                            {path: 'promocodes', component: EventsEventDashboardTicketDetailsPromocodesPageComponent},
                            {path: 'tickettype', component: EventsEventDashboardTicketDetailsTicketTypePageComponent},
                            {path: 'ticketsales', component: EventsEventDashboardTicketDetailsTicketSalesPageComponent},
                        ]
                    },
                    {
                        path: 'guestdetails', component: EventsEventDashboardGuestDetailsMainPageComponent, children: [
                            {path: 'allguests', component: EventsEventDashboardGuestDetailsAllGuestsPageComponent},
                            {
                                path: 'refundrequests',
                                component: EventsEventDashboardGuestDetailsRefundRequestsPageComponent
                            },
                        ]
                    },
                    {
                        path: 'manageguest', component: EventsEventDashboardManageGuestListMainPageComponent,
                        children: [
                            {path: 'allguests', component: EventsEventDashboardManageGuestListAllGuestsComponent},
                          {path: 'allinvites', component: EventsEventDashboardAllInvitesPageComponent},
                        ]
                    },
                ]
            },

            {path: 'createevent', component: EventsCreateEventEventCreationPageComponent},
            {path: 'createticket', component: EventsCreateEventCreateTicketPageComponent},
            {
                path: 'addticket', component: EventsCreateEventAddTicketMainPageComponent, children: [
                    {path: 'tickettype', component: EventsCreateEventAddTicketTicketTypePageComponent},
                    {path: 'promocodes', component: EventsCreateEventAddTicketPromocodesPageComponent},
                    {path: 'ticketsales', component: EventsEventDashboardTicketDetailsTicketSalesPageComponent},
                ]
            },
            {
                resolve: {eventInfo: GetEventInfoResolver},
                path: 'shareevent/:eventId', component: EventsShareEventPageComponent
            },
            {path: 'plans', component: EventsPremiumPlansPageComponent},

            // always put the below routes at the last
            {
                path: ':eventId', component: EventsEventMainBlankPageComponent,
                resolve: {userEventInfo: GetUserEventInfoResolver}, children: [
                    {path: 'details', component: EventsEventDetailsPageComponent},
                    {path: 'editevent', component: EventsEditEventPageComponent},
                    {path: '', redirectTo: 'details', pathMatch: 'full'},
                    {path: '**', redirectTo: 'details', pathMatch: 'full'},
                ]
            },
            {path: '', redirectTo: 'homepage', pathMatch: 'full'},

        ]
    },


];

