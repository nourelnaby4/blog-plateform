import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'category-list',
    pathMatch: 'full'
  },
  {
    path: 'category-list',
    component: CategoryComponent,
    title:'category-list'
  },
  {
    path: '**',
    redirectTo: 'category',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
