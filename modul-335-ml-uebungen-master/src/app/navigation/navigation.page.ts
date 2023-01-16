import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.page.html',
    styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
    navigateToFormTS: string = '/navigation-detail';

    constructor(private router: Router) {}

    ngOnInit() {}

    /* Default Angular Routing */

    navToDetailPageByURL() {
        this.router.navigateByUrl('/navigation-detail');
    }
    navToDetailPageWithParameters() {
        this.router.navigate(['/navigation-detail', { text: 'Hello World!' }]);
    }
    navToDetailPageWithParametersOverURL() {
        let eventID = 2;
        this.router.navigateByUrl('/navigation-detail/' + eventID);
    }
}
