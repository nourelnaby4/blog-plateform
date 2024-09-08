import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { WidgetsModule } from '../../widgets/widgets.module';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    WidgetsModule
  ]
})
export class CategoryModule { }
