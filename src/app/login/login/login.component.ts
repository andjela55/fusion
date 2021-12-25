import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = ''
  password = ''
  errorMessage = 'Invalid username or password!'
  invalidLogin = false


  constructor(private router: Router,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if (this.authService.loginUser(this.username, this.password)) {
      console.log("PROSAO AUTH IDE NA HOME")
      this.router.navigateByUrl("home")
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }

  }
}
