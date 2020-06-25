import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  // template: '<h2>John Doe</h2>'
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    //Properties
    user: User;

    //Metthods
    constructor() {

     }

    ngOnInit() {
      this.user = {
        firstName: 'Mint',
        lastName: 'Phon',
        age: 25,
        address: {
          street: '770,772 Phunnawiti',
          city: 'BKK'
        }
      }
    }
}



