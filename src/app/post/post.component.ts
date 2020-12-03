import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private domSanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.content = this.domSanitizer.bypassSecurityTrustScript(sessionStorage.getItem("content"));
  }

//   content = `Hi everyone, I’m Annie and I recently joined the Angular Components team after finishing up my rotations as an Engineering Resident here at Google. During the first rotation of my residency I worked on the Closure Compiler and implemented some new ES2020 features including nullish coalesce and optional chaining. After that, my second rotation project was with the Angular Components where I took on giving material.angular.io a long awaited face lift.
// <a  href="assets/abstract.jpg" download="abstract.jpg">Download Test</a>

//   If you have recently visited the Angular Materials documentation site you will have noticed some new visual updates. We’ve included new vibrant images on the components page, updates to the homepage, a guides page revamp and so much more! Today I would like to highlight how we generated these fun colorful images.`;

  content;

}
