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
    address = {
      street: '770,772 Phunnawiti',
      city: 'BKK'
    };

    //Metthods
    constructor() {

    }

    showAge() {
      return this.age + 2;
    }
}
