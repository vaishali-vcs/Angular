import { Course } from './../../Course';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  course: Course;

  constructor() { this.course = new Course(1, 'python'); }

  ngOnInit(): void {
  }

}
