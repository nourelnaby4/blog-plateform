import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'layout', pathMatch: 'full'
  },
  {
    path: 'layout',
    loadChildren: () => import('./core/layouts/layouts.module').then(m => m.LayoutsModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
