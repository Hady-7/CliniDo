import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth  } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { User } from '../models/user';

// import  firebase  from 'firebase/app';
// import  {} from 'firebase/app'
// import * as firebase from 'firebase/compat';

import { FacebookAuthProvider, GoogleAuthProvider,GithubAuthProvider } from "firebase/auth";

import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  userData: any;
  // isLoggedIn=false;

  constructor(
    public firebaseAuth: AngularFireAuth,
     public ngZone: NgZone,
     public router: Router,
     public afs: AngularFirestore,
     ){

    this.firebaseAuth.authState.subscribe( user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', this.userData.uid);
           localStorage.getItem('user');
      } else {
        localStorage.setItem('user',"");
          localStorage.getItem('user');
      }
    })
  }


  SignIn(email:string, password:string) {
    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['']);
        });
        this.SetUserData(result.user as User);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  SignUp(form:any) {
    console.log(form.displayName);
    return this.firebaseAuth.createUserWithEmailAndPassword(form.email, form.password)
    .then((result) => {
     result.user?.updateProfile(
        {displayName:form.displayName}
      )
      this.SendVerificationMail();
      console.log(result.user);
      this.SetUserData(result.user as User);
    }).catch((error) => {
      window.alert(error.message)
    })
  }



  SetUserData(user:User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    this.userData  = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(this.userData, {
      merge: true
    })
  }

  GoogleAuth() {
    return this.AuthLogin( new GoogleAuthProvider());
  }

  FaceAuth(){
    return this.AuthLogin( new FacebookAuthProvider());
  }

  GitAuth(){
    return this.AuthLogin( new GithubAuthProvider());
  }
  AuthLogin(provider:any) {
    return this.firebaseAuth.signInWithPopup(provider)
    .then((result) => {
       this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
      this.SetUserData(result.user as User);
    }).catch((error) => {
      window.alert(error)
    })
  }


  SendVerificationMail() {
   return this.firebaseAuth.authState.subscribe(
      (user) => user?.sendEmailVerification().then(() => {
          this.router.navigate(['verify-email-address']);
        })
      )}


  ForgotPassword(passwordResetEmail:any) {
    return this.firebaseAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }


      SignOut() {
        return this.firebaseAuth.signOut().then(() => {
          localStorage.removeItem('user');
          this.router.navigate(['sign-in']);
        })
      }

      get isLoggedIn(): boolean {
        const user = localStorage.getItem('user');
        return (user !== null ) ? true : false;
      }
    }
