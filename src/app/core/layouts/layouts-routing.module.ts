import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../layouts/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'pages',
        pathMatch: 'full'
      },
      {
        path: 'pages',
        loadChildren: () => import('../../features/pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'comments',
        loadChildren: () => import('../../features/comment/comment.module').then(m => m.CommentModule)
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
