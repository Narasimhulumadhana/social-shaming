import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  user:User = null;
  ngOnInit() {
    this.checkUser();
  }

  private checkUser() {
    this.userService.getUser().subscribe(user=>{
        this.user=user;
    })
  }

  Logout() {
    localStorage.removeItem("user");
    this.userService.setUser(null);
    this.router.navigateByUrl('');

  }
}
