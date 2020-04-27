import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { EventsComponent } from './components/events/events.component';
import { BannerComponent } from './components/banner/banner.component';
import { EventSearchPipe } from './custom-pipes/event-search.pipe';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    DashboardComponent,
    EventBookingComponent,
    EventsComponent,
    BannerComponent,
    EventSearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
