import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Category } from '../models/category';
import { map } from 'rxjs';
import { GlobalService } from '../../../shared/services/global.service';

export class CategoryService {

  private store = inject(AngularFirestore);
  private globalService = inject(GlobalService);

  constructor() { }

  create(category: Category) {
    this.store.collection('categories').add(category).then(docRef => {
      console.log(docRef);
      this.globalService.showSuccess();
    })
      .catch(error => {
        this.globalService.showError();
      });
  }

  get() {
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

  update(id: string, category: Category) {
    this.store.collection('categories').doc(id).update(category).then(() => {
      this.globalService.showSuccess();
    })
      .catch(error => {
        this.globalService.showError();
      });
  }

  delete(id: string) {
    this.store.collection('categories').doc(id).delete().then(() => {
      this.globalService.showSuccess();
    })
      .catch(error => {
        this.globalService.showError();
      });
  }
}
