import { Component, OnInit, ElementRef } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer-service/data-transfer.service'
import { AjaxCallService } from '../../services/ajax-service/ajax-call.service'
// import { ScrollToService } from 'ng2-scroll-to-el';

@Component({
  selector: 'app-event-booking',
  templateUrl: './event-booking.component.html',
  styleUrls: ['./event-booking.component.css']
})
export class EventBookingComponent implements OnInit {

 public currentEventInfoShared = '';
 public currentSelectedValue:any = [];
 public localNumberOfAttende:any = [];
 public contractValues: any = []; //  Event booking form values 
 public totalEventSeatsNumber: number;
 public count:number = 0;
 public compareValue:boolean;
 public MainData:any = [];
 public statusMessage: boolean = false;
 itemDetails = [{
  "numberOfAttendee": ""
 }]
  
  constructor(private data:DataTransferService, 
    private ajaxData:AjaxCallService,
    private elem: ElementRef,

    ) { 
    
  }

  ngOnInit(): void {
    this.localNumberOfAttende = this.ajaxData.numberOfAttende();
    this.data.shareEventData.subscribe(sharingEventData => this.currentEventInfoShared = sharingEventData);
  }
  ngAfterViewInit(){
    let elements = this.elem.nativeElement.querySelectorAll('.event-seats-count-transfer');
    let totalEventSeats:number = elements[0].innerText;
    this.totalEventSeatsNumber = totalEventSeats;
  }

  

  public lastOptionValueLength:number;

  // isOptionValue(e){
  //   let selectedOptionValue = e.target.value;
  //   let lastOptionValue = e.target.length-1;
  //   this.lastOptionValueLength = lastOptionValue;
  //   this.currentSelectedValue = selectedOptionValue;
  //   let someData:number = this.currentSelectedValue;
  //   let compare:boolean = lastOptionValue <= someData;
    
  //   if(someData){
  //       let newRow = {
  //         "numberOfAttendee": ""
  //       }
  //       if(this.currentSelectedValue <= this.lastOptionValueLength){
          
  //         if(this.lastOptionValueLength == this.itemDetails.length){
  //           // this.itemDetails.push(newRow);
  //           for(let i =0; i<someData; i++){
  //           this.itemDetails.push(newRow);
  //          }
  //         }
           
  //       }
  //   }
  // }

  addNewAttendeName(e:any){
    this.count++;
    let newRow = {
      "numberOfAttendee": ""
    }
    this.compareValue = this.count < this.totalEventSeatsNumber;

    if(this.compareValue){
      if(this.count){
        this.itemDetails.push(newRow);
      }
    }

  }

  onSubmit(data){
    if(data){
      let res:any = Object.entries(data);
      this.MainData = res;
      console.log("EventBookingConfirmData", this.MainData); //Please check for conformed event booking data
      this.statusMessage = true;
    }
  }



}
