import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
import {HomeComponent} from "./home/home.component";
import {PostsComponent} from "./posts/posts.component";
import {PostsListComponent} from "./posts-list/posts-list.component";

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
  {path:'profile',component:ProfileComponent},
  {path:'posts',component:PostsComponent},
  {path:'postslist',component:PostsListComponent},
  {path:'userlist',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
