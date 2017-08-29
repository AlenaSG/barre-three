import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Instructor } from '../instructor.model';
import { InstructorService } from '../instructor.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-instructor-detail',
  templateUrl: './instructor-detail.component.html',
  styleUrls: ['./instructor-detail.component.css'],
  providers: [InstructorService]
})

export class InstructorDetailComponent implements OnInit {
instructorId: string;
instructorToDisplay;

constructor(
    private route: ActivatedRoute,
    private location: Location,
    private instructorService: InstructorService
  ) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.instructorId = urlParameters['id'];
   });
  this.instructorToDisplay = this.instructorService.getInstructorById(this.instructorId);
  }

}
