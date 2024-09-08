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
        loadChildren: () => import('../pages/pages.module').then(m => m.PagesModule)
      },
      {
        path: 'category',
        loadChildren: () => import('../features/category/category.module').then(m => m.CategoryModule)
      },
      {
        path: '**',
        redirectTo: 'pages',
        pathMatch: 'full'
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
