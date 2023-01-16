import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-rechner',
    templateUrl: './rechner.page.html',
    styleUrls: ['./rechner.page.scss'],
})
export class RechnerPage implements OnInit {
    clearHistory: boolean;
    input: any = '0';
    previousValue: any = '0';
    history: any = '';

    constructor() {}

    ngOnInit() {}

    numberClick(nr: string) {
        if (this.clearHistory) {
            this.history = '';
            this.clearHistory = false;
        }

        if (this.input === '0') {
            this.input = nr;
            return;
        }

        if (nr === '.' && this.input.indexOf('.') !== -1) {
            return;
        }

        this.input += '' + nr;
    }

    operatorClick(op: string) {
        if (this.input != '') {
            this.history += this.input + ' ' + op;
            this.input = '';
        }
    }

    calculate() {
        if (this.input != '') {
            let tmpHist = this.history;
            this.input = eval(tmpHist + ' ' + this.input);
            this.history = '';
        } else {
            this.input = eval(this.history);
        }
    }

    clear() {
        this.input = '0';
        this.previousValue = '0';
        this.history = '';
        this.clearHistory = false;
    }

    canCalculate() {
        return this.input == '';
    }
}
