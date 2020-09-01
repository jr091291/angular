import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { ProductsService } from './../../../core/services/product/products.service';
import { Router } from '@angular/router';
import { MyValidators } from './../../../utils/my-validators';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router) {
    this.builFormProduct();
   }

  ngOnInit(): void {}

  private builFormProduct(): void{
    this.form = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      price: [0, [Validators.required, MyValidators.isPriceValid]],
      image: [''],
      description: ['', Validators.required]
    });
  }

  saveProduct(event: Event): void{
    event.preventDefault();
    if (this.form.valid){
      console.log(this.form.value);
      const product = this.form.value;

      this.productService.create(product).subscribe(result => {
        console.log(result);
        this.router.navigate(['/admin/products']);
      });
    }
    console.log('Invalid form');
  }

  get price(): AbstractControl{
    return this.form.get('price');
  }

}
