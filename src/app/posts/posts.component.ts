import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input('src') imagePath: string = "assets/smiley.jpg";
  @Input('title') cardTitle: string = "Sample Title";
  @Input('summary') cardSummary: string = "This will contain the content of the post trimmed to a specific length";
  @Input() rating:number = 0;
  @Input('bookmarked') isBookmarked: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.rating = (Math.floor(Math.random() * 10)+1)/2;
  }

  toggleBookmark(){
    this.isBookmarked = !this.isBookmarked;
    console.log(this.isBookmarked);
  }

}
