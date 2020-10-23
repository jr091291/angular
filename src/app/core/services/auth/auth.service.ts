import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afa: AngularFireAuth) { }

  createUser(mail: string, pass: string){
    return this.afa.createUserWithEmailAndPassword(mail, pass);
  }

  login(mail: string, pass: string){
    return this.afa.signInWithEmailAndPassword(mail, pass);
  }

  logout(){
    return this.afa.signOut();
  }

  hasUser(){
    return this.afa.authState;
  }
}
