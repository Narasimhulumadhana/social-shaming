import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {FollowComponent} from './follow/follow.component';
import {UserListComponent} from './user-list/user-list.component';
import {PostsComponent} from './posts/posts.component';
import {HeadComponent} from './head/head.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PostsListComponent } from './posts-list/posts-list.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { AbusivePostsComponent } from './abusive-posts/abusive-posts.component';
import { AbusiveWordsComponent } from './abusive-words/abusive-words.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    FollowComponent,
    UserListComponent,
    PostsComponent,
    HeadComponent,
    PostsListComponent,
    RandomUserComponent,
    AbusivePostsComponent,
    AbusiveWordsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
