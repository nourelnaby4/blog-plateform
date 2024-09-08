import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPostComponent } from './components/details-post/details-post.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'details-post',
    pathMatch: 'full'
  },
  {
    path: 'details-post',
    component: DetailsPostComponent,
    title: 'details-post'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
