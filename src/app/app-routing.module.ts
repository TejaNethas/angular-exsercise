import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent} from './components/events/events.component';
import { EventBookingComponent } from './components/event-booking/event-booking.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'events', component: EventsComponent},
  { path: 'events/:id', component: EventBookingComponent},
  { path: 'error', component: ErrorComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [
  EventsComponent,
  EventBookingComponent,
  ErrorComponent
]
