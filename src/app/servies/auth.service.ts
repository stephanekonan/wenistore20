import { Injectable } from '@angular/core';
import { provideAuth,getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email: string, password: string) {
    // this.afAuth.signInWithEmailAndPassword(email, password)
  }
}
