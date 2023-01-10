import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner',
  templateUrl: './rechner.page.html',
  styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {
  resultString: string = '';

  constructor() { }

  ngOnInit() {
  }
  addNumber(number:number){
    this.resultString += number;
  }
  addOperator(string:string){
    this.resultString += string;
  }
  resetCalc(){
    this.resultString = '';
  }
  calculateResult(){
    this.resultString = eval(this.resultString);

  }
}
