import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from "../user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit,OnChanges {

  @Input("user") user;
  followersCount=0;
  followingCount=0;
  users:User[]=[];
  heading:string;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getFollowersCount(this.user.userId);
    this.getFollowingCount(this.user.userId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.user.currentValue){
      this.user = changes.user.currentValue;
      this.getFollowersCount(this.user.userId);
      this.getFollowingCount(this.user.userId);
    }
  }

  private getFollowersCount(userId: number ) {
    this.userService.getFollowersCount(userId).subscribe((count:number)=>{
      this.followersCount=count;
    })
  }

  private getFollowingCount(userId: number) {
    this.userService.getFollowingCount(userId).subscribe((count:number)=>{
      this.followingCount=count;
    })
  }

   getFollowersUsers() {
    this.users=[];
    this.heading="FOLLOWERS";
    if(this.followersCount>0) {
      this.userService.getFollowersUsers(this.user.userId).subscribe((users:User[]) => {
        this.users=users;
      })
    }
  }

   getFollowingUsers() {
    this.users=[];
    this.heading="FOLLOWING";
    if(this.followingCount>0) {
      this.userService.getFollowingUsers(this.user.userId).subscribe((users: User[]) => {
        this.users = users;
      })
    }
  }
}
