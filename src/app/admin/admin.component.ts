import { Component, OnInit } from '@angular/core';
import { InstructorService } from '../instructor.service';
import { Instructor } from '../instructor.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [InstructorService]
})
export class AdminComponent implements OnInit {

  constructor(private instructorService: InstructorService) { }

  ngOnInit() {
  }

  submitForm(name: string, lastname: string, description: string, location: string, owner: boolean) {
      var newInstructor: Instructor = new Instructor(name, lastname, description, location, owner);
      this.instructorService.addInstructor(newInstructor);
    }
}
