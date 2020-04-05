import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {User} from "../model/user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userRegister;
  constructor(private form:FormBuilder,private userService:UserService) {
    this.createForm();
  }

  ngOnInit() {
  }

  private createForm() {
    this.userRegister=new FormGroup({
      'firstName':new FormControl('',[Validators.required]),
      'lastName': new FormControl('',[Validators.required]),
      'email': new FormControl('',[Validators.required]),
      'gender':new FormControl('',[Validators.required]),
      'country': new FormControl('',[Validators.required]),
      'password': new FormControl('',[Validators.required])
    })
  }

  Register(value: User) {
    this.userService.registerUser(value).subscribe((user:User)=>{
      if(user) {
        this.userService.setUser(user);
      }
    })
  }
}
