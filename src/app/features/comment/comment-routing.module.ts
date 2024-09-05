import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'comments-list',
    pathMatch: 'full'
  },
  {
    path: 'comments-list',
    component: CommentListComponent,
    title: 'Comments List'
  },
  {
    path: 'comment-form',
    component: CommentFormComponent,
    title: 'Comment Form'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
