import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  providers: [EventService]
})
export class ListingsComponent implements OnInit {
  events: FirebaseListObservable<any[]>;

  constructor(private router: Router, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    console.log(this.events);
  }

  goToDetailPage(clickedEvent) {
    this.router.navigate(['events', clickedEvent.$key]);
  }

}
