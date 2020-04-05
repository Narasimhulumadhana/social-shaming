import {User} from "./user";

export interface Posts {
  postId:number;

  post:string;

  postedBy:User;

  postedOn:any;

  isAbusive:boolean;

  isDeleted:boolean;
}
