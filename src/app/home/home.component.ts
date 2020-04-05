import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user:User = null;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.checkUser();
  }
  private checkUser() {
    this.userService.getUser().subscribe(user=>{
        this.user=user;
    })
  }
}
