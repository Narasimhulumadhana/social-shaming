import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'social-shaming';

  constructor(private userService:UserService) {

  }


  ngOnInit() {
    if(localStorage.getItem("user")){
      this.userService.setUser(JSON.parse(localStorage.getItem("user")));
    }
  }
}
