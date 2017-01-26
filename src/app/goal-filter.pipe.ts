import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './event.model';

@Pipe({
  name: 'goalFilter',
  pure: false
})
export class GoalFilterPipe implements PipeTransform {

  transform(input: Event[], args: string) {
    var output: Event[] = [];
    if (args == "highGoals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal > 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (args == "lowGoals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].goal < 10000) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }

}
