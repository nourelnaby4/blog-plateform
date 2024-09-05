import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { CategoryNavbarComponent } from './category-navbar/category-navbar.component';
import { PostCardComponent } from './widgets/post-card/post-card.component';
import { SubscribtionModule } from '../../features/subscribtion/subscribtion.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CategoryNavbarComponent,
    PostCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsRoutingModule,
    SubscribtionModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent
  ]
})
export class LayoutsModule { }
