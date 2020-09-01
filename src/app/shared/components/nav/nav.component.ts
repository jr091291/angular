import { Component, OnInit } from '@angular/core';

import { CartService } from './../../../core/services/cart/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  total = 0;

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(products => {
      this.total = products.length;
    });
   }

  ngOnInit(): void {
  }

}
