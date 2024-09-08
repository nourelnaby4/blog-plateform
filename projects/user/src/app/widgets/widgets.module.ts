import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostCardComponent } from './post-card/post-card.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentListComponent } from './comment-list/comment-list.component';


@NgModule({
  declarations: [
    PostCardComponent,
    CommentFormComponent,
    CommentListComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PostCardComponent,
    CommentFormComponent,
    CommentListComponent
  ]
})
export class WidgetsModule { }
