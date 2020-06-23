import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent {
    //Properties
    fristName = 'Mint';
    lastName = 'Phon';
    age = 25;

    //Metthods
    constructor() {
      // console.log('Hello User...');
      // this.sayHello();
      console.log(this.age);
      this.hasBirthday();
      console.log(this.age);
    }

    sayHello() {
      console.log(`Hello ${this.fristName}`);
      // console.log('Hello ' + '' + this.fristName);
    }

    hasBirthday() {
      this.age += 1;
    }
}
