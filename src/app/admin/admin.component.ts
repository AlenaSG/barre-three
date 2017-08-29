import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(name: string, lastname: string, description: string, location: string, owner: boolean) {
      var newInstructor: Instructor = new Instructor(name, lastname, description, location, owner);
      console.log(newInstructor);
    }
}
