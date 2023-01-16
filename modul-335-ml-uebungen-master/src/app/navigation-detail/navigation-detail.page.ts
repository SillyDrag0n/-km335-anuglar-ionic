import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
    selector: 'app-navigation-detail',
    templateUrl: './navigation-detail.page.html',
    styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {
    textFrom: string;
    eventID: string;

    constructor(private router: Router, private route: ActivatedRoute) {
        // navToDetailPageWithParameters() from NavigationPage
        this.textFrom = this.route.snapshot.paramMap.get('text');

        // navToDetailPageWithParametersOverURL() from NavigationPage
        this.eventID = this.route.snapshot.paramMap.get('eventid');
    }

    ngOnInit() {}

    navToNavigationBack() {
        this.router.navigateByUrl('/navigation');
    }
}
