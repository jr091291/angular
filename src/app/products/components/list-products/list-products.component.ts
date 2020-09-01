import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ProductsService } from '../../../core/services/product/products.service';
import { Product } from 'src/app/core/model/products.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(  private productsService: ProductsService ) { }

  ngOnInit(): void {
    this.fechProducts();
  }

  fechProducts(): void{
    this.productsService.getAll().subscribe(products => {
      this.products = products;
    });
  }

  createProduct(): void{
    const product: Product = {
      id: '222',
      image: '/assets/images/mug.png',
      description: 'aaaaaaaaaa',
      price: '8900',
      title: 'Product new'
    };
    this.productsService.create(product).subscribe( (response) => {
      console.log(response);
    });
  }

  clickProduct(product: Product): void{
    console.log(`product clicked ${product.id}`);
  }

}
