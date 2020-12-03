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
