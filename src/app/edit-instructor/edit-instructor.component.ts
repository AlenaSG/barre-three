import { Component, Input, OnInit } from '@angular/core';
import { Instructor } from '../instructor.model';
import { InstructorService } from '../instructor.service';

@Component({
  selector: 'app-edit-instructor',
  templateUrl: './edit-instructor.component.html',
  styleUrls: ['./edit-instructor.component.css'],
  providers: [InstructorService]
})

export class EditInstructorComponent implements OnInit {
  @Input() selectedInstructor;

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
  }

  beginUpdatingInstructor(instructorToUpdate){
      this.instructorService.updateInstructor(instructorToUpdate);
    }

    beginDeletingInstructor(instructorToDelete){
      if(confirm("Are you sure you want to delete this instructor from the list?")){
        this.instructorService.deleteInstructor(instructorToDelete);
      }
    }
}
