import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscribtionRoutingModule } from './subscribtion-routing.module';
import { SubscribtionFormComponent } from './components/subscribtion-form/subscribtion-form.component';


@NgModule({
  declarations: [
    SubscribtionFormComponent
  ],
  imports: [
    CommonModule,
    SubscribtionRoutingModule
  ],
  exports:[
    SubscribtionFormComponent
  ]
})
export class SubscribtionModule { }
