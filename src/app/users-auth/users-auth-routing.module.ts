import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user/create-user.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: 'create',
    component: CreateUserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersAuthRoutingModule { }

