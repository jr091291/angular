import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormsComponent } from './components/product-forms/product-forms.component';

import { MaterialModule } from './../material/material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { NavComponent } from './components/nav/nav.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductFormsComponent,
    NavComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    LayoutModule
  ]
})
export class AdminModule { }
