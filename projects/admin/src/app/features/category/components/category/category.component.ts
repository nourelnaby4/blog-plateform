import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categoryForm!: FormGroup;

  ngOnInit() {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.categoryForm.valid) {
      console.log(this.categoryForm.value);
      this.categoryForm.reset();
    }
  }
}
