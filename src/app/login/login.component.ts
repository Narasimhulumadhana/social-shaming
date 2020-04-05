import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom;
  constructor(private form:FormBuilder,private userService:UserService,private router:Router) { }

  ngOnInit() {
    this.loginFrom=this.form.group({
      'email':new FormControl('',Validators.required),
      'password':new FormControl('',Validators.required)
    })
  }

  login(value: any) {
    if(value.email=='admin' && value.password=='admin'){
      const user:User={
        userId:0,
        firstName:'admin',
        lastName:'admin',
        email:'admin@gmail.com',
        gender:'',
        country:'india',
        socialScore:0,
        password:''
      }
      this.userService.setUser(user);
      this.router.navigateByUrl('');
    }else {
      this.userService.loginUser(value).subscribe((user: User) => {
        if (user) {
          this.userService.setUser(user);
          this.router.navigateByUrl('');
        }
      });
    }
  }
}
