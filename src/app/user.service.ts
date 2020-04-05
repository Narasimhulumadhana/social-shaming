import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user";
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user:BehaviorSubject<User> = new BehaviorSubject<User>(null);

  constructor(private http:HttpClient) { }

  getUser(): Observable<User> {
    return this._user.asObservable();
  }
  setUser(value: User) {
    this._user.next(value);
    localStorage.setItem("user",JSON.stringify(value));
  }

  registerUser(user:User){
    return this.http.post(environment.url+"user/register",user);
  }

  loginUser(value: any) {
    return this.http.post(environment.url+'user/login',value);
  }

  getRandomUser(userId: number) {
    return this.http.get(environment.url+'user/'+userId+'/random');
  }

  addFollow(data:any) {
    return this.http.post(environment.url+'user/follow',data);
  }

  getFollowersCount(userId: number) {
    return this.http.get(environment.url+'user/follow/followers/count/'+userId);
  }

  getFollowingCount(userId: number) {
    return this.http.get(environment.url+'user/follow/following/count/'+userId);
  }

  getFollowersUsers(userId: number) {
    return this.http.get(environment.url+'user/follow/followers/users/'+userId);
  }

  getFollowingUsers(userId: number) {
    return this.http.get(environment.url+'user/follow/following/users/'+userId);
  }
}
