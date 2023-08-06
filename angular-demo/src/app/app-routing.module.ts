import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './example/home-page/home-page.component';
import { ParentComponent } from './example/component-interaction/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'multiple-components',
    loadChildren: () => import('./example/form/form.module').then((m)=> m.FormModule)
  },
  {
    path: 'component-interaction',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
