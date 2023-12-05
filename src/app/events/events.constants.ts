import {CommonsService} from '@core/commons.service';
import {UsersConstants} from '@users/users.constants';

export class EventsConstants {
    public static EVENT_OPTIONS = [
        {
            value: 'Events Attending',
            text: 'Events Attending',
            link: '/signedin/events/myevents/invited'
        },
        {
            value: 'Created Events',
            text: 'Created Events',
            link: '/signedin/events/myevents/created'
        },


    ];
    public static ADD_TICKET_OPTIONS = [
        {
            value: 'Ticket types',
            text: 'Ticket types',
            link: '/signedin/events/addticket/tickettype'
        },
        {
            value: 'Promo codes',
            text: 'Promo codes',
            link: '/signedin/events/addticket/promocodes'
        },
        {
            value: 'Ticket sales',
            text: 'Ticket sales',
            link: '/signedin/events/addticket/ticketsales'
        },

    ];
    public static INVITED_OPTIONS = [
        {
            value: 'Upcoming events',
            text: 'Upcoming events',
            link: '/signedin/events/myevents/invited/upcoming'
        },
        {
            value: 'Past events',
            text: 'Past events',
            link: '/signedin/events/myevents/invited/past'
        },

    ];
    public static CREATED_OPTIONS = [
        {
            value: 'Upcoming events',
            text: 'Upcoming events',
            link: '/signedin/events/myevents/created/upcoming'
        },
        {
            value: 'Past events',
            text: 'Past events',
            link: '/signedin/events/myevents/created/past'
        },
        {
            value: 'Draft Events',
            text: 'Draft Events',
            link: '/signedin/events/myevents/created/draft'
        },
    ];

    public static BLAST_OPTIONS = [
        {
            value: 'Contacts',
            text: 'Contacts',
            link: '/signedin/userprofiles/blasts/:blastId/contacts'
        },
        {
            value: 'Blasts',
            text: 'Blasts',
            link: '/signedin/userprofiles/blasts/:blastId/blasts'
        }
    ];

    public static API_AUTH_ENDPOINT = 'api/auth';
    public static API_HELP_CENTER_ENDPOINT = '/api/help-center';

    public static EVENTS_ENDPOINT = 'events';
    public static EVENTS_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(EventsConstants.EVENTS_ENDPOINT);

  public static ORDERS_ENDPOINT = 'orders';
  public static ORDERS_SECURED_ENDPOINT = CommonsService.appendSecuredToUrl(EventsConstants.ORDERS_ENDPOINT);

    public static DASHBOARD_OPTIONS = [
        {
            value: 'Dashboard',
            text: 'Dashboard',
        },
        {
            value: 'Event details',
            text: 'Event details',
        },
        {
            value: 'Ticket details',
            text: 'Ticket details',
        },
        {
            value: 'Guest details',
            text: 'Guest details',
        },
        {
            value: 'Manage guest list',
            text: 'Manage guest list',
        },
    ];

    public static TICKET_DETAILS_OPTIONS = [
        {
            value: 'Ticket type',
            text: 'Ticket details',
            link: '/signedin/events/eventdashboard/ticketdetails/tickettype'
        },
        {
            value: 'Promo codes',
            text: 'Promo codes',
            link: '/signedin/events/eventdashboard/ticketdetails/promocodes'
        },
        {
            value: 'Ticket sales',
            text: 'Ticket sales',
            link: '/signedin/events/addticket/ticketsales'
        },
    ];

    public static MANAGE_GUEST_OPTIONS = [
        {
            value: 'All guests',
            text: 'All guests',
            link: '/signedin/events/eventdashboard/manageguest/allguests'
        },
        {
            value: 'Checked in',
            text: 'Checked in',
            link: '/signedin/events/eventdashboard/manageguest/allguests'
        },
      {
        value: 'All invites',
        text: 'All invites',
        link: '/signedin/events/eventdashboard/manageguest/allinvites'
      },
    ];

    public static GUEST_OPTIONS = [
        {
            value: 'All guests',
            text: 'All guests',
            link: '/signedin/events/eventdashboard/guestdetails/allguests'
        },
        {
            value: 'Refund requests',
            text: 'Refund requests',
            link: '/signedin/events/eventdashboard/guestdetails/refundrequests'
        },
    ];

  public static MASS_MESSAGING_OPTIONS = [
    {
      value: 'All contacts',
      text: 'All contacts',
    },
    {
      value: 'All groups',
      text: 'All groups',
    },
  ]

}

