import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../user.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit,OnChanges {
  @Input('user') user:User;
  users:User[]=[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.getUsers(this.user.userId);
  }
  ngOnChanges(changes: SimpleChanges)  {
    if(changes.user.currentValue){
      this.user=changes.user.currentValue;
      this.getUsers(this.user.userId);
    }
  }

  private getUsers(userId: number) {
    this.userService.getRandomUser(userId).subscribe((users:User[])=>{
      if(users){
        this.users=users;
      }
    })
  }

  follow(userId: number,index: number) {
    let data={
      follower:this.user.userId,
      following:userId
    }
    return this.userService.addFollow(data).subscribe(follow=>{
      if(follow){
        this.users.splice(index,1);
      }
    });

  }
}
