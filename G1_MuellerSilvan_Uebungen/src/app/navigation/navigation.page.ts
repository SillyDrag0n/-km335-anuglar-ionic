import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.page.html',
  styleUrls: ['./navigation.page.scss'],
})
export class NavigationPage implements OnInit {
  navigationNumber: any = 0;

  constructor(private router: Router) { }
  ngOnInit() {
  }

  navigateToNavigationdetail(){
    this.router.navigate(['/navigationdetail'], this.navigationNumber);
  }
}
