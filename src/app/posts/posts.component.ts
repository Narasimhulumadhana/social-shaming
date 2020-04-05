import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../model/user";
import {PostsService} from "../posts.service";
import {Posts} from "../model/posts";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnChanges {
  @Input('user') user:User;
  tweet:string;
  constructor(private postService:PostsService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.user=changes.user.currentValue;
  }

  postTweet() {
    console.log(this.tweet);
    let post = {
      post:this.tweet,
      postedBy:this.user.userId,
      postedOn:Date.now(),
    }
    this.postService.addPost(post).subscribe((posts: Posts)=>{
      if(posts){
        posts.postedBy=this.user;
        this.postService.addPostList(posts);
      }
    });
  }

  doTextareaValueChange(event) {
    this.tweet=event.target.value;
  }
}
