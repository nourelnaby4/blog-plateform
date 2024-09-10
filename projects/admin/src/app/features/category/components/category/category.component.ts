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

  private categoryService = inject(CategoryService);
  private globalService = inject(GlobalService);



  ngOnInit() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {

    if (this.categoryForm.valid) {

      let category:Category = {
        name: this.categoryForm.value.categoryName,
        status: 'active'
      }

      this.categoryService.saveDate(category)

      this.globalService.showSuccess();

      this.categoryForm.reset();
    }
  }

  // onSubmit() {
  //   if (this.categoryForm.valid) {
  //     let categoryData = this.categoryForm.value;
  //     console.log(categoryData);

  //     let subCategoryDate = {
  //       name: 'subCategory1'
  //     };

  //     this._store.collection('categories').add(categoryData).then(docRef => {
  //       console.log(docRef);

  //       this._store.collection('categories')
  //       .doc(docRef.id) .collection('subCategories').add(subCategoryDate).then(
  //           docSubRef => {
  //             console.log(docSubRef);
  //           }
  //         )
  //     })
  //       .catch(error => {
  //         alert(error)
  //       });

  //     this.categoryForm.reset();
  //   }
  // }
}
