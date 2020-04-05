import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {User} from "../model/user";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(private location:Location) { }

  ngOnInit() {
    this.user=this.location.getState()
  }

}
