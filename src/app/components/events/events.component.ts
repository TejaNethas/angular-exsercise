import { Component, OnInit, Input } from '@angular/core';
import { AjaxCallService } from '../../services/ajax-service/ajax-call.service'
import { DataTransferService } from '../../services/data-transfer-service/data-transfer.service'
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  public eventsInfo:any = [];
  public eventsInfoObjToAny: any = [];
  public searchText = '';
  public eventId = '';
  public eventInfoData:any = '';
  public sharingEventDataTransfter = '';

  constructor(
    public commonService: AjaxCallService,
    private data:DataTransferService,
    private router : Router
    ) { }

  ngOnInit(): void {
   
    this.commonService.eventsGetData().subscribe((res: any[]) => {  // events data info local json 
       this.eventsInfoObjToAny = res;
       this.eventsInfo = this.eventsInfoObjToAny.events;
       console.log(this.eventsInfo.length);
    })

    this.data.share.subscribe(sharingDataSub => this.searchText = sharingDataSub);

  }

  onSelect(event:any){
    this.eventId = event.target.textContent;
    let eventDataBreak = event;
    console.log(eventDataBreak);
    let eventData = event.target.previousElementSibling.innerHTML;
    this.eventInfoData = eventData;
    this.sharingEventDataTransfter = this.eventInfoData;
    this.data.updateCurrentEventData(this.sharingEventDataTransfter);
    const eventIdSlice = this.eventId.slice(0, 1); 
    this.router.navigate(['/events', eventIdSlice]);
    
  }

}
