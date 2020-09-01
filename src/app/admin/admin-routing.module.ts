import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormsComponent } from './components/product-forms/product-forms.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductComponent } from '../products/components/create-product/create-product.component';
import { ProductEditComponent } from '../products/components/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: 'form',
        component: ProductFormsComponent
      },
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: CreateProductComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
  ],
  imports: [ RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
