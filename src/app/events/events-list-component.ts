import { Component } from "@angular/core";

@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="well hoverwell thumbnail">
      <h2>{{events.name}}</h2>
      <div>Date: {{events.date}}</div>
      <div>Time: {{events.time}}</div>
      <div>Price: \${{events.price}}</div>
      <div>
        <span>Location: {{events.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{events.location.city}}, {{events.location.country}}</span>
      </div>
    </div>
  </div>
  `
})

export class EventsListComponent {
  events = {
    id: 1,
    name: 'Angular Connect',
    date: '9/18/2021',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

}
