import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutsRoutingModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LayoutComponent
  ]
})
export class LayoutsModule { }
