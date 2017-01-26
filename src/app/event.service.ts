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

   updateEvent(localUpdatedEvent) {
     var eventEntryInFirebase = this.getEventByKey(localUpdatedEvent.$key);
     eventEntryInFirebase.update({title: localUpdatedEvent.title,
                                  user: localUpdatedEvent.user,
                                  description: localUpdatedEvent.description,
                                  goal: localUpdatedEvent.goal});
   }
   deleteEvent(localDeletedEvent) {
     var eventEntryInFirebase = this.getEventByKey(localDeletedEvent.$key);
     eventEntryInFirebase.remove();
   }
}
