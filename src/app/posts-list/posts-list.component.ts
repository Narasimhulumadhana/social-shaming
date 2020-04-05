import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {User} from "../model/user";
import {PostsService} from "../posts.service";
import {Posts} from "../model/posts";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit,OnChanges {
  @Input('user') user:User;
  posts:Posts[]=[];
  constructor(private postsService:PostsService) { }

  ngOnInit() {
    this.getAllPost(this.user.userId);
    this.getPosts();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(changes.user.currentValue){
      this.user=changes.user.currentValue;
      this.getAllPost(this.user.userId);
    }

  }

  private getAllPost(userId: number) {
    this.postsService.getAllPost(userId).subscribe((posts:Posts[])=>{
        if(posts){
          this.postsService.setPosts(posts);
        }
    });
  }

  private getPosts() {
    this.postsService.getPosts().subscribe((posts:Posts[])=>{
      this.posts=posts;
    })
  }

    reportAbusive(postId: number,i:number) {
      this.postsService.reportAbusive(postId).subscribe((data)=>{
        if(data){
          this.posts.splice(i,1);
        }
      });
    }
}
