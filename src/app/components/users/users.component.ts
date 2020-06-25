import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor() { }

  ngOnInit() {
      this.users = [
        {
          firstName: 'Mint',
          lastName: 'Phon',
          age: 25,
          address: {
            street: '770,772 Phunnawiti',
            city: 'BKK'
          }
        },
        {
          firstName: 'Fern',
          lastName: 'Than',
          age: 24,
          address: {
            street: '896 Phunnawiti',
            city: 'BKK'
          }
        },
        {
          firstName: 'Kukkaii',
          lastName: 'M.',
          age: 30,
          address: {
            street: '99 Phonnadee',
            city: 'Kalasin'
          }
        }
      ];

      this.addUser({
        firstName: 'Jane',
        lastName: 'K.',
        age: 20,
        address: {
          street: 'Bangkok',
          city: 'BKK'
        }
      });
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
