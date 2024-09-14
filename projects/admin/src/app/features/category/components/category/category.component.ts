import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm!: FormGroup;
  categoryList: any[] = [];
  categoryName!: string;

  private categoryService = inject(CategoryService);
  private globalService = inject(GlobalService);

  ngOnInit() {
    this.getData();
    this.initalizeForm();
  }

  initalizeForm() {
    this.categoryForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      status: new FormControl('New', [Validators.required])
    });
  }

  getData() {
    this.categoryService.get().subscribe(
      res => {
        this.categoryList = res
        console.log(this.categoryList)
      }
    );
  }

  onSubmit() {
    try {
      if (this.categoryForm.valid) {
        let id = this.categoryForm.value.id;

        let category: Category = {
          name: this.categoryForm.value.name,
          status: this.categoryForm.value.status
        }

        if (id) {
          this.categoryService.update(id!, category);
        }
        else {
          this.categoryService.create(category);
        }

        this.categoryList.unshift(category);

        this.categoryName='';
      }
      else {
        this.globalService.showError("name of category is required")
      }
    }
    catch (error) {
      this.globalService.showError();
    }
    finally{
      this.initalizeForm();
    }
  }

  onEdit(id: string, category: Category) {
    this.categoryForm.patchValue({
      id: id,
      name: category.name,
      status: 'Edited'
    });
  }

  onDelete(id: string) {
    this.categoryService.delete(id);
    this.initalizeForm();
  }
}


