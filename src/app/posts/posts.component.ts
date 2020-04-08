import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  imagePath: string = "assets/smiley.jpg";
  cardTitle: string = "Sample Title";
  cardSummary: string = "This will contain the content of the post trimmed to a specific length";

  constructor() { }

  ngOnInit(): void {
  }

}
