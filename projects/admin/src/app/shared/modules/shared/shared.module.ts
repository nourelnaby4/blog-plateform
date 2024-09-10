import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../../../../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const modules = [
  FormsModule,
  ReactiveFormsModule,
  AngularFireModule.initializeApp(environment.firebaseConfig),
  AngularFirestoreModule,


]
@NgModule({
  declarations: [],

  imports: [
    modules
  ],
  exports: [
    modules
  ]
})
export class SharedModule { }
