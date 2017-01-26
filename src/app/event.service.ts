import { Injectable } from '@angular/core';
import { Event } from './event.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class EventService {
  events: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.events = angularFire.database.list('events');
   }

   getEvents() {
     return this.events;
   }

   addEvent(newEvent: Event) {
     this.events.push(newEvent);
   }

   getEventByKey(eventKey: string){
     return this.angularFire.database.object('events/' + eventKey);
   }
}
