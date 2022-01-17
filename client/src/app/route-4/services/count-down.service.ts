import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountDownService {

  constructor() { }

   timerValue = new BehaviorSubject<any>(null);
  
}
