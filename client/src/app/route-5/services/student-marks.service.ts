import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentMarksService {

  constructor() { }

 subjectMarks =  [
    { name: "Michael", class: 9, section: "a", sub1: 43, sub2: 78, sub3: 90 },
    { name: "Mark", class: 7, section: "h", sub1: 93, sub2: 78, sub3: 90 },
    { name: "Amit", class: 4, section: "b", sub1: 443, sub2: 78, sub3: 90 },
    { name: "Rohan", class: 2, section: "g", sub1: 33, sub2: 78, sub3: 90 },
    { name: "Sandy", class: 8, section: "d", sub1: 43, sub2: 78, sub3: 90 },
    { name: "Claudia", class: 4, section: "e", sub1: 43, sub2: 78, sub3: 90 },
    { name: "Stephey", class: 9, section: "a", sub1: 43, sub2: 78, sub3: 90 },

  ];
}
