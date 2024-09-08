import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { DetailsPostComponent } from './components/details-post/details-post.component';
import { WidgetsModule } from '../../core/layouts/widgets/widgets.module';


@NgModule({
  declarations: [
    DetailsPostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    WidgetsModule
  ]
})
export class PostModule { }



