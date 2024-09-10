import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category';

export class CategoryService {

private _store = inject(AngularFirestore);
constructor() { }

saveDate(category:Category) {

    this._store.collection('categories').add(category).then(docRef => {
      console.log(docRef)
    })
    .catch(error => {
      alert(error)
    });
  }
}
