import { Component } from '@angular/core';
import { PostData } from './post-data';
import { Observable, from } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularFireStorage } from '@angular/fire/storage';
// import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items: Observable<any[]>;

  // constructor(private firestorage: AngularFireStorage) {
  // }

  // ngOnInit(){
  //   this.resetForm();
  // }

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

  // formTemplate = new FormGroup({
  //   caption: new FormControl('',Validators.required),
  //   category: new FormControl,
  //   imageUrl: new FormControl('',Validators.required)
  // })

  // imgSrc: string = "assets/abstract.jpg";
  // selectedImage: File = null;
  // isSubmitted: boolean = false;

  // showPreview(event){
  //   console.log("Value in showPreview event:",event);
  //   if(event.target.files && event.target.files[0]){
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => this.imgSrc = e.target.result;
  //     reader.readAsDataURL(event.target.files[0]);
  //     this.selectedImage = event.target.files[0];
  //   }
  //   else{
  //     this.imgSrc = "assets/abstract.jpg";
  //     this.selectedImage = null;
  //   }
  // }

  // onSubmit(formValue){
  //   this.isSubmitted = true;
  //   if(this.formTemplate.valid){
  //     var filePath = `${formValue.category}/${this.selectedImage.name}_${new Date().getTime()}`;
  //     const fileRef = this.firestorage.ref(filePath);
  //     this.firestorage.upload(filePath,this.selectedImage).snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         fileRef.getDownloadURL().subscribe((url) => {
  //           formValue['imageUrl'] = url; 
  //           this.resetForm();
  //         })
  //       })
  //     )
  //     .subscribe();
  //   }
  // }

  // get formControls(){
  //   return this.formTemplate['controls']
  // }

  // resetForm(){
  //   this.formTemplate.reset();
  //   this.formTemplate.setValue({
  //     caption: '',
  //     imageUrl: '',
  //     category: 'Animal'
  //   });
  //   this.imgSrc = "assets/abstract.jpg";
  //   this.isSubmitted = false;
  //   this.selectedImage = null;
  // }
}
