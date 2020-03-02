import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PlaceAppointmentComponent } from './place-appointment/place-appointment.component';
import { ViewAppointmentComponent } from './view-appointment/view-appointment.component';

import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
  {path:"",component:LandingPageComponent},
  {path:"place",component:PlaceAppointmentComponent},
  {path:"view",component:ViewAppointmentComponent},
  {path:"contact",component:ContactUsComponent},
  {path:"view/place",component:PlaceAppointmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
