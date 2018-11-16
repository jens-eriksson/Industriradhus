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
/*         this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }

            const scrollToTop = window.setInterval(function () {
                const pos = window.pageYOffset;
                if (pos > 0) {
                    window.scrollTo(0, pos - 30); // how far to scroll on each step
                } else {
                    window.clearInterval(scrollToTop);
                }
            }, 8); // how fast to scroll (this equals roughly 60 fps)
        }); */
    }

}
