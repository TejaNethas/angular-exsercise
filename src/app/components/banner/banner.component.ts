import { Component, OnInit } from '@angular/core';
import { AjaxCallService } from '../../services/ajax-service/ajax-call.service'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  public bannerInfo:any = [];
  public bannerInfoObjToAny: any = [];

  constructor(public commonService: AjaxCallService) { }

  ngOnInit(): void {
       // events data info local json 
       this.commonService.bannerGetData().subscribe((res: any[]) => {
        this.bannerInfoObjToAny = res;
        this.bannerInfo = this.bannerInfoObjToAny.banner;
        console.log(this.bannerInfo);
     })
  }

}
