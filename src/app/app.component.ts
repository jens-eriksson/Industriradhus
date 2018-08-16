import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
     this.router.events.subscribe((evt) => {
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
    }); 
}

}
