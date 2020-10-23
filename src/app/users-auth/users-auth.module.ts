import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { UsersAuthRoutingModule} from './users-auth-routing.module';

import { CreateUserComponent } from './components/create-user/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [CreateUserComponent, LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    UsersAuthRoutingModule,
    MaterialModule
  ]
})
export class UsersAuthModule { }
