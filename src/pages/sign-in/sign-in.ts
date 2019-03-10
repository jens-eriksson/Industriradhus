import { AuthProvider } from './../../providers/auth';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.html',
  styleUrls: ['./sign-in.css']
})
export class SignInPage implements OnInit {

  message: string;
  redirectTo: string;

  constructor(
    private authProvider: AuthProvider,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.redirectTo = this.route.snapshot.queryParams.redirectTo;
    if(!this.redirectTo) {
      this.redirectTo = "start";
    }
  }

  ngOnInit() {
    if(this.authProvider.isAuthenticated() == false) {
      this.authProvider.signInAnonymous().then(user => {
        if (this.authProvider.isAuthenticated()) {
          this.router.navigate([this.redirectTo]);
        }
      });
    }
  }

  signInWithGoogle() {
    this.authProvider.signInWithGoogle().then(user => {
      if (this.authProvider.isAuthenticated()) {
        this.router.navigate([this.redirectTo]);
      }
      else {
        console.log("signInWithGoogle faild");
        this.authProvider.signOut();
        this.message = "Sorry. Du har inga rättighet";
      }
    });
  }

  signInWithFacebook() {
    this.authProvider.signInWithFacebook().then(user => {
      if (this.authProvider.isAuthenticated()) {
        this.router.navigate([this.redirectTo]);
      }
      else {
        this.authProvider.signOut();
        this.message = "Sorry. Du har inga rättigheter";
      }
    });
  }

  navToAbout() {
    this.router.navigate(["omoss"]);
  }
}
