import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements OnInit {

  constructor() { }
  myNum = 0;
  ngOnInit() {
  }

  plusOne(){
    console.log("My number was: ", this.myNum);
    debugger;
    this.myNum++;
    console.log("My num is now: ", this.myNum);
  }
}
