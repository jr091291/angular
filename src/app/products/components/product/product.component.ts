import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/core/model/products.model';

import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  addToCar(): void{
    console.log(`Product added`);
    this.productClicked.emit(this.product);
    this.cartService.addCart(this.product);
  }
}
