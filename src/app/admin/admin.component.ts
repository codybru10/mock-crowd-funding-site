import { Component, OnInit } from '@angular/core';
import { Event } from '../event.model';
import { EventService } from '../event.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [EventService]
})
export class AdminComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  submitForm(title: string, user: string, description: string, goal: number) {
    var newEvent: Event = new Event(title, user, description, goal);
    this.eventService.addEvent(newEvent);
  }

}
