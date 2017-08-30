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

  getInstructorById(instructorId: string){
    return this.database.object('instructors/' + instructorId);
  }

  updateInstructor(localUpdatedInstructor){
    var instructorEntryInFirebase = this.getInstructorById(localUpdatedInstructor.$key);
    instructorEntryInFirebase.update({name: localUpdatedInstructor.name,
                                lastname: localUpdatedInstructor.lastname,
                                description: localUpdatedInstructor.description,
                                location: localUpdatedInstructor.location,
                                owner: localUpdatedInstructor.owner,
                              });
  }

  deleteInstructor(localInstructorToDelete){
    var instructorEntryInFirebase = this.getInstructorById(localInstructorToDelete.$key);
    instructorEntryInFirebase.remove();
  }

}
