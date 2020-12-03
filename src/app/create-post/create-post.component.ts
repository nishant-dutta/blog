import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private http: HttpClient) { }

  postForm: FormGroup;
  title: FormControl;
  summary: FormControl;
  content: FormControl;


  ngOnInit(): void {
    // creating post form
    this.createPostForm();
  }

  // Method to create controls of the post form
  createPostFormControls(){
    this.title = new FormControl('', Validators.required);
    this.summary = new FormControl('', Validators.required);
    this.content = new FormControl(sessionStorage.getItem('content'), Validators.required);
  }

  createPostForm(){
    // calling method to create form controls
    this.createPostFormControls();

    this.postForm = new FormGroup({
      title: this.title,
      summary: this.summary,
      content: this.content
    });
  }

  onContentChange(event){
    console.log(event);
    sessionStorage.setItem("content",this.content.value);
  }

  createNewPost(){

    // let body = {
    //   "content": this.content,
    // }

    // this.http.post("http://www.xyz.com/createPost", body)
    //   .subscribe(response => {
    //     console.log(response);
    //   });

    console.log(this.postForm);

    // Resetting the form content
    this.postForm.reset();
  }

}
