import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AjaxCallService {

  constructor(private httpClient: HttpClient) { }

  public eventsData = './assets/events.json';   // Local Json for events

  public bannerImg = './assets/banner.json';    // Local Json for banner

  eventsGetData(){ return this.httpClient.get(this.eventsData); }

  bannerGetData(){ return this.httpClient.get(this.bannerImg); }

  numberOfAttende(){ let numberOfAttendeSelect = [{"name":"1", "value":"1"}, {"name":"2", "value":"2"}, {"name":"3", "value":"3"}, {"name":"4", "value":"4"}, {"name":"5", "value":"5"}, {"name":"6", "value":"6"}] 
    return numberOfAttendeSelect
  }

}
