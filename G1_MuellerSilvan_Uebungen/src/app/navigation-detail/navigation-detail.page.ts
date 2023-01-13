import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-detail',
  templateUrl: './navigation-detail.page.html',
  styleUrls: ['./navigation-detail.page.scss'],
})
export class NavigationDetailPage implements OnInit {
  navigateDetailId: any = 0;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.navigateDetailId = this.route.snapshot.paramMap.get('id');
  }

  navigateToNavigation(){
    this.router.navigateByUrl('/navigation');
  }
}
