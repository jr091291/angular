import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../../../../core/services/auth/auth.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) {
      this.builFormCreateUser();
    }

  ngOnInit(): void {
    
  }

  private builFormCreateUser(){
    this.createUserForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      pass: ['', [Validators.required]],
    });
  }

  saveUser(event: Event): void{
    event.preventDefault();
    if (this.createUserForm.valid){
      console.log(this.createUserForm.value);
      const user = this.createUserForm.value;

      this.authService.createUser(user.mail, user.pass)
      .then(()=>{
        console.log("Regited user: " + user.mail)
        this.router.navigate(['/auth/login']);
      });
    }
    console.log('Invalid form');
  }
}
