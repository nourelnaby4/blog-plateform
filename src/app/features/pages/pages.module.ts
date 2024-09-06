import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostCardComponent } from '../../core/layouts/widgets/post-card/post-card.component';
import { SingleCategoryComponent } from './single-category/single-category.component';


@NgModule({
  declarations: [
    TermsAndConditionsComponent,
    ContactUsComponent,
    HomeComponent,
    AboutComponent,
    PostCardComponent,
    SingleCategoryComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,

  ]
})
export class PagesModule { }
