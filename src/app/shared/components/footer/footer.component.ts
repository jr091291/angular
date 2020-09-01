import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() {
    this.emailField = new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20)]
    );

    // this.emailField.valueChanges.subscribe(email => {
    //   console.log(email);
    // });
   }

  emailField: FormControl;

  matcher = new MyErrorStateMatcher();

  ngOnInit(): void {
  }

  sendEmail(): void{
    console.log(this.emailField.value);
  }
}
