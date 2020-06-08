import { Component, OnInit } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user :User ={
    "id":890,
    "name":"Fahrul Istimiwir",
    "email":"istimiwir@gmail.com",
    "mobile":89780063454354
  }

  constructor() { }

  ngOnInit(): void {
  }

}
