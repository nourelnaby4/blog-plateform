import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    TermsAndConditionsComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    WidgetsModule

  ]
})
export class PagesModule { }


