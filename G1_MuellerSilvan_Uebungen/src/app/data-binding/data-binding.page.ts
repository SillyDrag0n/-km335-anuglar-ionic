import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.page.html',
  styleUrls: ['./data-binding.page.scss'],
})
export class DataBindingPage implements OnInit {
  userData: UserData = {vorname: 'Max', name: 'Muster', alter: 19};
  constructor() { }

  ngOnInit() {
  }

}
interface UserData{
  vorname: string;
  name: string;
  alter: number;
}
