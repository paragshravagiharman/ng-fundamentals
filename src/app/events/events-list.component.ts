import { Component } from '@angular/core';


@Component({
  selector : 'events-list',
  template : `
    <div>
      <h1> Upcoming Angular Events </h1>
      <hr />
      <event-thumbnail [event]="event1" ></event-thumbnail>
    </div>
  `
})
export class EventsListComponent{

  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '12/10/2019',
    time: '10:00',
    price: 'USD 500',
    location: {
        address : 'address',
        pin : '411057',
        city: 'pune',
        country: 'IN'
    }
  };

}
