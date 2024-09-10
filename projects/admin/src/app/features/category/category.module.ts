import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { SharedModule } from '../../shared/modules/shared/shared.module';
import { CategoryService } from './services/category.service';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CategoryRoutingModule,
    SharedModule,
    CommonModule
  ],
  providers:[CategoryService]
})
export class CategoryModule { }
