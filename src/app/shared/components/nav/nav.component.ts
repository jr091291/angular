import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart/cart.service';
import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  total$: Observable<number>;

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
    ) {
    // this.cartService.cart$.subscribe(products => {
    //   this.total = products.length;
    // });
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length) 
    )
   }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout()
    .then(()=>{
      this.router.navigate(['']);
    })
  }

}
