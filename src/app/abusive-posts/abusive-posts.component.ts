import { Component, OnInit } from '@angular/core';
import {Posts} from "../model/posts";
import {PostsService} from "../posts.service";

@Component({
  selector: 'app-abusive-posts',
  templateUrl: './abusive-posts.component.html',
  styleUrls: ['./abusive-posts.component.scss']
})
export class AbusivePostsComponent implements OnInit {
  posts:Posts[]=[];
  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  private getPosts() {
    this.postsService.getAbusivePosts().subscribe((posts:Posts[])=>{
      this.posts=posts;
    })
  }

  Abusive(postId: number,userId:number, i: number) {
    this.postsService.deletePost(postId,userId).subscribe((data)=>{
      if(data){
        this.posts.splice(i,1);
      }
    })
  }

  NotAbusive(postId: number, i: number) {
    this.postsService.notAbusive(postId).subscribe((data)=>{
      if(data){
        this.posts.splice(i,1);
      }
    })
  }
}
