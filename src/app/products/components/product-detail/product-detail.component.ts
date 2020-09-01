import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/core/model/products.model';

import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../../../core/services/product/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const id = params.id;
      this.fechProduct(id);
      console.log(id);
    });
  }

  fechProduct(id: string): void{
    this.productsService.getById(id).subscribe(product => {
      this.product = product;
    });
  }

  updateProduct(id: string, changes: Partial<Product>): void{
    const updateProduct: Partial<Product> = {
      description: 'La descripcion se ha editado',
      price: '89000',
      title: 'Product new edited'
    };
    this.productsService.update('222', updateProduct ).subscribe(product => {
      this.product = product;
    });
  }

  deleteProduct(id= '222'): void{
    this.productsService.delete(id).subscribe(result => {
      console.log(`Product ${id} deleted: ${result}`);
    });
  }

}
