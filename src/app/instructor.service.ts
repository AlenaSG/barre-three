import { Injectable } from '@angular/core';
import { Instructor } from './instructor.model';
import { INSTRUCTORS } from './mock-instructors';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class InstructorService {
 instructors: FirebaseListObservable<any[]>;
 constructor(private database: AngularFireDatabase) {
    this.instructors = database.list('instructors');
 }

  getInstructors() {
    return this.instructors;
  }

  addInstructor(newInstructor: Instructor) {
    this.instructors.push(newInstructor);
  }
  
  getInstructorById(instructorId: number){
    //for (var i = 0; i <= INSTRUCTORS.length - 1; i++) {
    //  if (INSTRUCTORS[i].id === instructorId) {
    //    return INSTRUCTORS[i];
    //  }
  //  }
  }

}
