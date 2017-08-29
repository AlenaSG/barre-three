import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Instructor } from '../instructor.model';
import { InstructorService } from '../instructor.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [InstructorService]
})

export class TeamComponent implements OnInit {
  instructors: FirebaseListObservable<any[]>;

  constructor(private router: Router, private instructorService: InstructorService) {}

  ngOnInit() {
    this.instructors = this.instructorService.getInstructors();
  }

  goToDetailPage(clickedInstructor: Instructor) {
     this.router.navigate(['instructors', clickedInstructor.id]);
   };
}
