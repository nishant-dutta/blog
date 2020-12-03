import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PostsComponent } from './posts/posts.component';
import { TopNavigationBarComponent } from './top-navigation-bar/top-navigation-bar.component';
import { SuggestedPostsComponent } from './suggested-posts/suggested-posts.component';
import { PostComponent } from './post/post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { AboutComponent } from './about/about.component';
import { QuillModule } from 'ngx-quill';
import { EditorModule } from 'primeng/editor';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    PostsComponent,
    TopNavigationBarComponent,
    SuggestedPostsComponent,
    PostComponent,
    AllPostsComponent,
    AboutComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    QuillModule.forRoot(),
    EditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
