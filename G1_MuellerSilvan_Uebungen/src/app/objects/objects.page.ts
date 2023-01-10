import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.page.html',
  styleUrls: ['./objects.page.scss'],
})
export class ObjectsPage implements OnInit {
  person: Person = {name: 'Silvan', lastname: 'Müller'}

  constructor() { }

  ngOnInit() {
  }

}
interface Person {
  name: string;
  lastname: string;
}
