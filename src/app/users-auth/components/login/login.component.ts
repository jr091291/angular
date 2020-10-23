import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.builFormCreateUser();
    }

  ngOnInit(): void {
    
  }

  private builFormCreateUser(){
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  login(event: Event): void{
    event.preventDefault();
    if (this.loginForm.valid){
      console.log(this.loginForm.value);
      const user = this.loginForm.value;

      this.authService.login(user.mail, user.pass)
      .then(()=>{
        console.log("Login user: " + user.mail)
        this.router.navigate(['/admin/products']);
      })
      .catch(()=>{
        alert("Usuario or password invalid")
      });
    }
    console.log('Invalid form');
  }
}
