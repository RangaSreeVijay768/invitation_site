import {Component, Injector, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {PageComponent} from '@core/components/page.component';
import {Events} from '@core/core.models';
import Event = Events.Event;
import EventInvite = Events.EventInvite;
import EventLocation = Events.EventLocation;
import EventInfo = Events.EventInfo;
import EventTicket = Events.EventTicket;
import UserEventInfo = Events.UserEventInfo;
import {ActivatedRouteSnapshot} from '@angular/router';
import EventInvitationCode = Events.EventInvitationCode;
import {MapInfoWindow, MapMarker} from '@angular/google-maps';

@Component({
  selector: 'events-event-details-page',
  templateUrl: './events-event-details-page.component.html',
  styleUrls: ['./events-event-details-page.component.scss']
})
export class EventsEventDetailsPageComponent extends PageComponent {


  constructor(injector: Injector) {
    super(injector);
  }

  event: Event;
  eventInvites: EventInvite[];
  eventTickets: EventTicket[];

  eventLocations: EventLocation[];

  eventInfo$: Observable<EventInfo>;
  event_info = new EventInfo();

  userEventInfo$: Observable<UserEventInfo>;
  user_event_info: UserEventInfo;

  invitation_code: string;

  event_invitation_code_received: EventInvitationCode;

  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;

  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
    // lng: this.event_info.event_location?.location.longitude,
    // lat: this.event_info.event_location?.location.latitude,
    lat: 0,
    lng: 0
  };

  addMarker(event: google.maps.Map) {

    if (event.getCenter()) {
      console.log('MAPA', event.getCenter()?.toJSON());
      this.markerPositions.push(event.getCenter().toJSON());
    }
  }

  openInfoWindow(marker: MapMarker) {
    if (this.infoWindow !== undefined) {
      this.infoWindow.open(marker);
    }
  }

  initializeComponent() {
    this.userEventInfo$ = this.getRouterParameterFromParentObservable('userEventInfo', 1);
    this.userEventInfo$.subscribe(value => {
      console.log(value);
      this.user_event_info = value;
      this.event_info = value.event_info;
      this.event = value.event_info.event;
    });
    this.getQueryParameterObservable('invitation_code').subscribe((value: string) => {
      console.log(value);
      this.invitation_code = value;
    });

    this.center.lat = this.event_info.event_location.location.latitude;
    this.center.lng = this.event_info.event_location.location.longitude;

    console.log('latitude : ', this.event_info.event_location?.location.latitude);


    console.log('latitude type : ', typeof (this.event_info.event_location?.location.latitude));
  }

  getLoggedOutRouterUrl(activated_route?: ActivatedRouteSnapshot): string {
    // @ts-ignore
    const url = activated_route._routerState.url;

    let event_id = url.replace('/signedin/events/', '');
    console.log(event_id, url);
    event_id = event_id.slice(0, event_id.indexOf('/'));
    console.log(url, event_id);
    return `/basic/event/${event_id}`;
  }

  navigateToShareEventPage() {
    this.router.navigateByUrl(`/signedin/events/shareevent/${this.event.event_id}`);
  }
}
