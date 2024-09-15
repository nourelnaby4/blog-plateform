import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPostComponent } from './components/list-post/list-post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

const routes: Routes = [
  {
     path:'',
     redirectTo:'list-post',
     pathMatch:'full'
  },
  {
    path:'list-post',
    component:ListPostComponent,
    title:'list-post'
  },
  {
    path:'create-post',
    component:CreatePostComponent,
    title:'create-post'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
