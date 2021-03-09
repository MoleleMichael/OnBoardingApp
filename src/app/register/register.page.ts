import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import {users} from '../users';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {


  fName
  lName
  email
  phonenumber
  password
  users : users;
  constructor(private authService : AuthenticationService) { }

  ngOnInit() {

  }

 signUp(){
    this.users = new users (this.fName,this.lName, this.email, this.phonenumber, this.password);
    this.authService.registerUser(this.users)
  }
}
