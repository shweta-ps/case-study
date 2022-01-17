import { Component, OnInit } from '@angular/core';
import { StudentMarksService } from '../services/student-marks.service';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.component.html',
  styleUrls: ['./student-marks.component.scss'],
})
export class StudentMarksComponent implements OnInit {
  constructor(private subjectMarksService: StudentMarksService) {}

  titles: any;
  orderCount = 0;
  originalStudentMarks: any[] = [];
  studentMarks: any[] = [];
  pageName ="Route-5";

  ngOnInit(): void {
    this.originalStudentMarks = this.subjectMarksService.subjectMarks;
    this.titles = Object.keys(this.originalStudentMarks[0]);

    this.originalStudentMarks.forEach((x) => {
      this.studentMarks.push(x);
    });
  }

  sortData(title: string) {
    this.orderCount++;

    // ascending order
    if (this.orderCount === 1) {
      if (title == 'name' || title == 'section') {
        this.studentMarks.sort((a, b) => {
          if (a[title] < b[title]) {
            return -1;
          } else if (a[title] > b[title]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        this.studentMarks.sort((a, b) => {
          return a[title] - b[title];
        });
      }
      this.studentMarks.sort((a, b) => {
        return a[title] - b[title];
      });
    }

    // descending order
    else if (this.orderCount === 2) {
      if (title == 'name' || title == 'section') {
        this.studentMarks.sort((a, b) => {
          if (a[title] > b[title]) {
            return -1;
          } else if (a[title] < b[title]) {
            return 1;
          } else {
            return 0;
          }
        });
      } else {
        this.studentMarks.sort((a, b) => {
          return b[title] - a[title];
        });
      }
    } else {
      this.orderCount = 0;
      this.studentMarks = [];
      this.originalStudentMarks.forEach((x) => {
        this.studentMarks.push(x);
      });
    }
  }
}
