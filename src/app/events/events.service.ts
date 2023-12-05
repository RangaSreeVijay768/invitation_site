import {Injectable} from '@angular/core';
import {RestService} from '@core/http/rest.service';
import {CoreHttpClient} from '@core/http/http.module';
import {EventsConstants} from '@events/events.constants';
import {EventsRequests} from '@events/events.models';
import {Observable} from 'rxjs';
import GetAllEvents = EventsRequests.GetAllEvents;
import GetEvent = EventsRequests.GetEvent;
import GetEventInvitesByEvent = EventsRequests.GetEventInvitesByEvent;
import GetEventLocationsByEvent = EventsRequests.GetEventLocationsByEvent;
import GetAllEventInfos = EventsRequests.GetAllEventInfos;
import GetEventInvitesByUserAccount = EventsRequests.GetEventInvitesByUserAccount;
import CreateEventAttendeeForFreeEventTicketAndUserAccount = EventsRequests.CreateEventAttendeeForFreeEventTicketAndUserAccount;
import GetEventInfo = EventsRequests.GetEventInfo;
import GetEventsByCreatedBy = EventsRequests.GetEventsByCreatedBy;
import GetEventAttendeesCountByUserAccount = EventsRequests.GetEventAttendeesCountByUserAccount;
import CreateEventTicket = EventsRequests.CreateEventTicket;
import GetEventTicketsByEvent = EventsRequests.GetEventTicketsByEvent;
import GetEventAttendeesByEvent = EventsRequests.GetEventAttendeesByEvent;
import GetEventPromoCodesByEvent = EventsRequests.GetEventPromoCodesByEvent;
import GetEventAttendeesOfUserAccount = EventsRequests.GetEventAttendeesOfUserAccount;
import CreateEvent = EventsRequests.CreateEvent;
import CreatePromoCode = EventsRequests.CreatePromoCode;
import GetAllEventCategories = EventsRequests.GetAllEventCategories;
import GetEventAttendees = EventsRequests.GetEventAttendees;
import CreateOrderOrderItemOrderPaymentForEvent = EventsRequests.CreateOrderOrderItemOrderPaymentForEvent;
import CreatePaidUserEventTicketFromOrderPayment = EventsRequests.CreatePaidUserEventTicketFromOrderPayment;
import CreateEventPromoCode = EventsRequests.CreateEventPromoCode;
import GetEventInviteAndEventInfosByUserAccount = EventsRequests.GetEventInviteAndEventInfosByUserAccount;
import GetEventInviteAndUserEventInfosByUserAccount = EventsRequests.GetEventInviteAndUserEventInfosByUserAccount;
import UpdateEvent = EventsRequests.UpdateEvent;
import UpdateEventTicket = EventsRequests.UpdateEventTicket;
import PublishEvent = EventsRequests.PublishEvent;
import ShowGuestListCountVisibility = EventsRequests.ShowGuestListCountVisibility;
import RemoveGuestListCountVisibility = EventsRequests.RemoveGuestListCountVisibility;
import GetUserEventInfo = EventsRequests.GetUserEventInfo;
import GetUserEventTicketsByUserAccount = EventsRequests.GetUserEventTicketsByUserAccount;
import AddCoHostStatus = EventsRequests.AddCoHostStatus;
import RemoveCoHostStatus = EventsRequests.RemoveCoHostStatus;
import CheckInEventAttendee = EventsRequests.CheckInEventAttendee;
import GetOrderItemsCountByEventTicket = EventsRequests.GetOrderItemsCountByEventTicket;
import GetUserEventTicketsCountByEvent = EventsRequests.GetUserEventTicketsCountByEvent;
import GetUserEventTicketsByEvent = EventsRequests.GetUserEventTicketsByEvent;
import GetEventTicketsSaleSumByEvent = EventsRequests.GetEventTicketsSaleSumByEvent;
import GetEventTicketInfoByEvent = EventsRequests.GetEventTicketInfoByEvent;
import CreateEventInvitesByEventAndUserAccounts = EventsRequests.CreateEventInvitesByEventAndUserAccounts;
import GetEventTicketInfosByEvent = EventsRequests.GetEventTicketInfosByEvent;
import CreateEventTicketAndEventTicketSaleItem = EventsRequests.CreateEventTicketAndEventTicketSaleItem;
import CreateEventInvite = EventsRequests.CreateEventInvite;
import GetOrderCompleteInfoByOrderPayment = EventsRequests.GetOrderCompleteInfoByOrderPayment;
import GetEventInvitationCode = EventsRequests.GetEventInvitationCode;
import AddLocationAvailableStatus = EventsRequests.AddLocationAvailableStatus;
import RemoveLocationAvailableStatus = EventsRequests.RemoveLocationAvailableStatus;

@Injectable({
    providedIn: 'root'
})
export class EventsService extends RestService {

    constructor(httpClient: CoreHttpClient) {
        super(httpClient);
        this.end_point = EventsConstants.EVENTS_ENDPOINT;
        this.secured_end_point = EventsConstants.EVENTS_SECURED_ENDPOINT;
    }

    getAllEvents(request: GetAllEvents.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/events/all`, {params: this.serialize(request)});
    }

    getEvent(request: GetEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/events/${request.event_id}`,
            {params: this.serialize(request)});
    }

    getEventInvitesByEvent(request: GetEventInvitesByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventinvites/event`, {params: this.serialize(request)});
    }

    getEventInvitesByUserAccount(request: GetEventInvitesByUserAccount.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventinvites/useraccount`, {params: this.serialize(request)});
    }

    getEventLocationsByEvent(request: GetEventLocationsByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventlocation/event`, {params: this.serialize(request)});
    }

    getAllEventInfos(request: GetAllEventInfos.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/event/alleventinfo`, {params: this.serialize(request)});
    }

    createEventAttendeeForFreeEventTicketAndUserAccount(request: CreateEventAttendeeForFreeEventTicketAndUserAccount.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventattendees/freeeventticket`,
            this.serialize(request));
    }

    getEventInfo(request: GetEventInfo.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventinfo/${request.event_id}`, this.serialize(request));
    }

    getEventsByCreatedBy(request: GetEventsByCreatedBy.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/events/createdby`, {params: this.serialize(request)});
    }

    getEventAttendeesCountByUserAccount(request: GetEventAttendeesCountByUserAccount.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventattendees/count/useraccount`,
            {params: this.serialize(request)});
    }

    createEventTicket(request: CreateEventTicket.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventtickets`, this.serialize(request));
    }

    getEventTicketsByEvent(request: GetEventTicketsByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventtickets/event`, {params: this.serialize(request)});
    }

    getEventTicketInfosByEvent(request: GetEventTicketInfosByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventtickets/eventticketinfo/event`,
            {params: this.serialize(request)});
    }



    createEventTicketAndEventTicketSaleItem(request: CreateEventTicketAndEventTicketSaleItem.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventtickets/eventticketinfo`,
            this.serialize(request));
    }

    getEventAttendeesByEvent(request: GetEventAttendeesByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventattendees/event`, {params: this.serialize(request)});
    }

    getEventPromoCodesByEvent(request: GetEventPromoCodesByEvent.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventpromocodes/event`, {params: this.serialize(request)});
    }

    getEventAttendeesOfUserAccount(request: GetEventAttendeesOfUserAccount.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventattendees/of/useraccount`,
            {params: this.serialize(request)});
    }

    createEvent(request: CreateEvent.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/events`, this.serialize(request));
    }

    updateEvent(request: UpdateEvent.Request): Observable<any> {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/events/${request.event_id}`, this.serialize(request));
    }

    updateEventTicket(request: UpdateEventTicket.Request): Observable<any> {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/eventtickets/${request.event_ticket_id}`,
            this.serialize(request));
    }

    createPromoCode(request: CreatePromoCode.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/promocode`, this.serialize(request));
    }


    getAllEventCategories(request: GetAllEventCategories.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/events/eventcategories`, this.serialize(request));
    }

    getEventAttendees(request: GetEventAttendees.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/eventattendees/${request.event_attendee_id}`,
            {params: this.serialize(request)});
    }

    createOrderOrderItemOrderPaymentForEvent(request: CreateOrderOrderItemOrderPaymentForEvent.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/order/eventtickets/start`, this.serialize(request));
    }

    createPaidUserEventTicketFromOrderPayment(request: CreatePaidUserEventTicketFromOrderPayment.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/order/eventtickets/complete`,
            this.serialize(request));
    }

    createEventPromoCode(request: CreateEventPromoCode.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventpromocode`, this.serialize(request));
    }

    getEventInviteAndEventInfosByUserAccount(request: GetEventInviteAndEventInfosByUserAccount.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/event/eventinviteandeventinfo`,
            {params: this.serialize(request)});
    }

    getEventInviteAndUserEventInfosByUserAccount(request: GetEventInviteAndUserEventInfosByUserAccount.Request) {
        return this.httpClient.get(`${this.getEndPoint()}/event/eventinviteandusereventinfo`,
            {params: this.serialize(request)});
    }

    publishEvent(request: PublishEvent.Request) {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/events/publishevent`, this.serialize(request));
    }

    showGuestListCountVisibility(request: ShowGuestListCountVisibility.Request) {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/events/addguestlistcountvisibility`,
            this.serialize(request));
    }

    removeGuestListCountVisibility(request: RemoveGuestListCountVisibility.Request) {
        return this.httpClient.put(`${this.getSecuredEndPoint()}/events/removeguestlistcountvisibility`,
            this.serialize(request));
    }

    getUserEventInfo(request: GetUserEventInfo.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usereventinfo/${request.event_id}`,
            {params: this.serialize(request)});
    }

    getUserEventTicketsByUserAccount(request: GetUserEventTicketsByUserAccount.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usereventtickets/useraccount`,
            {params: this.serialize(request)});
    }

    addCoHostStatus(request: AddCoHostStatus.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventattendees/addcohoststatus`,
            this.serialize(request));
    }

    removeCoHostStatus(request: RemoveCoHostStatus.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventattendees/removecohoststatus`,
            this.serialize(request));
    }

    checkInEventAttendee(request: CheckInEventAttendee.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventattendees/checkineventattendee`,
            this.serialize(request));
    }

    getOrderItemsCountByEventTicket(request: GetOrderItemsCountByEventTicket.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/orderitems/count/eventticket`,
            {params: this.serialize(request)});
    }

    getUserEventTicketsCountByEvent(request: GetUserEventTicketsCountByEvent.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usereventtickets/event/count`,
            {params: this.serialize(request)});
    }

    getUserEventTicketsByEvent(request: GetUserEventTicketsByEvent.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/usereventtickets/event`,
            {params: this.serialize(request)});
    }

    getEventTicketsSaleSumByEvent(request: GetEventTicketsSaleSumByEvent.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/eventtickets/sale/sum`,
            {params: this.serialize(request)});
    }

    createEventInvitesByEventAndUserAccounts(request: CreateEventInvitesByEventAndUserAccounts.Request) {
        return this.httpClient.post(`${this.getSecuredEndPoint()}/eventinvites/createeventinvitebyeventanduseraccount`,
            this.serialize(request));
    }

    getEventTicketInfoByEvent(request: GetEventTicketInfoByEvent.Request) {
        return this.httpClient.get(`${this.getSecuredEndPoint()}/eventtickets/eventticketinfo/event`,
            {params: this.serialize(request)});
    }

    createEventInvite(request: CreateEventInvite.Request) {
      return this.httpClient.post(`${this.getSecuredEndPoint()}/eventinvites`, this.serialize(request));
    }

    getOrCreateEventInvitationCodeByUserAccountAndEvent(request: GetEventTicketInfoByEvent.Request) {
      return this.httpClient.get(`${this.getSecuredEndPoint()}/eventinvitationcodes/getorcreateeventinvitationcode`,
        {params: this.serialize(request)});
    }

    getEventInvitationCode(request: GetEventInvitationCode.Request) {
      return this.httpClient.get(`${this.getEndPoint()}/eventinvitationcodes/${request.eventInvitationCodeId}`,
        {params: this.serialize(request)});
    }

    addLocationAvailableStatus(request: AddLocationAvailableStatus.Request) {
      return this.httpClient.post(`${this.getSecuredEndPoint()}/events/addlocationavailablestatus`, this.serialize(request));
    }

    removeLocationAvailableStatus(request: RemoveLocationAvailableStatus.Request) {
      return this.httpClient.post(`${this.getSecuredEndPoint()}/events/removelocationavailablestatus`, this.serialize(request));
    }
}
