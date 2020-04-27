import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  private content = new BehaviorSubject<string>("");
  public share = this.content.asObservable();
  constructor() { }
  updateData(text){
    this.content.next(text);
  }

  private eventData = new BehaviorSubject<string>("");
  public shareEventData = this.eventData.asObservable();

  updateCurrentEventData(text){
    this.eventData.next(text);
  }

}
