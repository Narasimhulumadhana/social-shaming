import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Posts} from "./model/posts";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts:BehaviorSubject<Posts[]>=new BehaviorSubject(null);
  allPosts:Posts[]=[];
  constructor(private http:HttpClient) { }

  addPost(tweet: any) {
    return this.http.post(environment.url+'posts/add',tweet);
  }

  addPostList(posts: Posts) {
  this.allPosts.splice(0,0,posts);
  this.posts.next(this.allPosts);
  }

  getPosts():Observable<Posts[]>{
   return  this.posts.asObservable();
  }

  getAllPost(userId: number) {
    return this.http.get(environment.url+'posts/'+userId);
  }

  setPosts(posts: Posts[]) {
    this.allPosts=posts;
    this.posts.next(posts);
  }

  reportAbusive(postId: number) {
    return this.http.put(environment.url+'posts/'+postId,{});
  }

  getAbusivePosts() {
    return this.http.get(environment.url+'posts/all/abusive');
  }

  deletePost(postId: number,userId:number) {
    return this.http.get(environment.url+'posts/'+postId+'/user/'+userId);
  }

  notAbusive(postId: number) {
    return this.http.put(environment.url+'posts/'+postId+'/notabusive',{});
  }

  addWord(word: any) {
    return this.http.post(environment.url+'admin/add/words',word);
  }

  getAbusiveWord() {
    return this.http.get(environment.url+'admin/words');
  }
}
