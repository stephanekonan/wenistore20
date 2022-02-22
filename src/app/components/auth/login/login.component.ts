import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/servies/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  login() {
    // this.authService.login(this.email, this.password).then(() => {
    //   alert("Login successful");
    // }).catch(() => {
    //   alert("Login failed");
    // })
  }

}
