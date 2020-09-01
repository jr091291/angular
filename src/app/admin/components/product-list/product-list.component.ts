import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { ProductsService } from './../../../core/services/product/products.service';
import { Product } from 'src/app/core/model/products.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: MatTableDataSource<Product>;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor( private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fechProducts();
  }

  fechProducts(): void{
    this.productsService.getAll().subscribe(products => {
      this.products = new MatTableDataSource(products);
    });
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  editProduct(id): void{}

  deleteProduct(id: string): void{
    this.productsService.delete(id).subscribe(response => {
      console.log(response);
      this.fechProducts();
    });
  }
}
