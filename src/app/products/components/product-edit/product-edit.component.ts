import { Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { MyValidators } from 'src/app/utils/my-validators';
import { ProductsService } from 'src/app/core/services/product/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.builFormProduct();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productService.getById(this.id).subscribe(product => {
        this.form.patchValue(product);
      });
    });
  }

  private builFormProduct(): void{
    this.form = this.formBuilder.group({
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

      this.productService.update(this.id, product).subscribe(result => {
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
