import { Component } from '@angular/core';
import { PostData } from './post-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-post';
  postData: PostData[] = [
    new PostData("assets/abstract.jpg", "Human evolution", "Dinasaurs the most deadly of all, could they have let huma...",4,false),
    new PostData("assets/logo.png", "Lutvil Corp.", "Dinasaurs the most deadly of all, could they have",4,false),
    new PostData("assets/cell-phone.jpg", "Ringing phones?", "Dinasaurs the most deadly of all, could they existed",4,false),
    new PostData("assets/desk.jpg", "Minimalist", "Dinasaurs the most deadly of all, could they  existed",4,false),
    new PostData("assets/high-tech.jpg", "Technology", "Dinasaurs the most deadly of all, could they existed",4,false),
    new PostData("assets/logo.png", "Human evolution", "Could they have let humans survive if they existed",4,false),
    new PostData("assets/desk2.jpg", "Human evolution", "Dinasaurs the most deadly of all, could they have let humans survive if they existed",4,false),
    new PostData("assets/high-tech2.jpg", "Human evolution", "Dinasaurs the most deadly of all, could they have let humans survive if they existed",4,false),

];
}
