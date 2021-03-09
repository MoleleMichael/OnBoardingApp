import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import {users} from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userInfo: users

  constructor(private db: AngularFirestore, private fireAuth: AngularFireAuth, private router: Router) { }

  registerUser(buyers) {
    console.log(buyers)
    let message = ""

    firebase.auth().createUserWithEmailAndPassword(buyers.email, buyers.password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    }).then(results => {

      console.log(results);

      if (results) {
        message = "successfully registered"
        firebase.database().ref('buyers/' + results.user.uid).set({
          fname: buyers.fName,
          lname: buyers.lName,
          email: buyers.email,
          // age: buyers.age,
          phonenumber: buyers.phonenumber
        });
        console.log(message);
        this.router.navigate(["menu"])
      } else {

      }

    });
  }

  signInUser(email, password) {
    let user: any
    let message = ""

    firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      message = errorMessage
      // ...
    }).then(result => {
      user = result
      console.log(result);
      if (user) {
        message = user.user.email + "Has successfully logged in"
        // # # # # # saving locally # # # # # \\
        localStorage.setItem('userID', user.user.uid);
        console.log(localStorage.getItem('userID'));
        console.log(message);
        this.router.navigate(["menu"])
      } else {
        console.log(message);
      }
      return user.user.email
    });
  }

}
