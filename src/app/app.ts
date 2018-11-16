import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthProvider } from '../providers/auth';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrls: ['./app.css']
})
export class Industriradhus implements OnInit {

    constructor(
        private router: Router,
        private authProvider: AuthProvider
    ) {
        this.authProvider.initilize();
        this.router.navigate(["home"]);
    }

    ngOnInit() {
    }

}
