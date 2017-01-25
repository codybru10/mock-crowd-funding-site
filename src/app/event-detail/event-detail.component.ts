import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Event } from '../event.model';
import { EventService } from '../event.service';
import { FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
  providers: [ EventService ]
})
export class EventDetailComponent implements OnInit {
  eventKey: string;
  eventToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private eventService: EventService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.eventKey = urlParametersArray['id'];
    });
    this.eventToDisplay = this.eventService.getEventByKey(this.eventKey);
  }

}
