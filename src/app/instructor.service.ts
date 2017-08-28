import { Injectable } from '@angular/core';
import { Instructor } from './instructor.model';
import { INSTRUCTORS } from './mock-instructors';


@Injectable()
export class InstructorService {

  constructor() { }

  getInstructors() {
    return INSTRUCTORS;
  }

  getInstructorById(instructorId: number){
    for (var i = 0; i <= INSTRUCTORS.length - 1; i++) {
      if (INSTRUCTORS[i].id === instructorId) {
        return INSTRUCTORS[i];
      }
    }
  }

}
