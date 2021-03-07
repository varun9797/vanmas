import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private data = new BehaviorSubject('');
  currentData = this.data.asObservable()


  constructor() { }

    callFooter(item: any) {
        this.data.next(item);
    }

}