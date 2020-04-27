import { Component, OnInit } from '@angular/core';
import { DataTransferService } from '../../services/data-transfer-service/data-transfer.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public refValue:string;
  text = '';
  constructor( private data: DataTransferService) { }

  ngOnInit(): void {
 
  }

  updateText(event:any){
    this.text = event.target.value;
    console.log(this.text)
    this.data.updateData(this.text);
  }


}
