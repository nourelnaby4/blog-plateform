import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category';
import { map } from 'rxjs';

export class CategoryService {

  private store = inject(AngularFirestore);
  constructor() { }

  saveDate(category: Category) {

    this.store.collection('categories').add(category).then(docRef => {
      console.log(docRef)
    })
      .catch(error => {
        alert(error)
      });
  }

  getData() {
    return this.store.collection('categories').snapshotChanges().pipe(
      map(action => {
       return action.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;

          return { id, data }
        });
      })
    );
  }
}
