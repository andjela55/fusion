import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';


export const AUTHENTICATED_USER = 'authenticatedUser';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router: Router) { }

  loginUser(username: string, password: string) {
    if (username === "admin" && password === "admin") {
      sessionStorage.setItem("AUTHENTICATED_USER", username);
      return true;
    }
    return false;
  }

  isUserLoggedIn(): boolean {
    let sessionUser = sessionStorage.getItem("AUTHENTICATED_USER");
    if (sessionUser!=null) {
      return true;
    }
    return false;

  }

  logout() {
    console.log("logout() metoda pozvana")
    sessionStorage.removeItem("AUTHENTICATED_USER");
    this.router.navigate(['login']);

  }





}
