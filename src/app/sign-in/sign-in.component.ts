import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  rememberLogin: boolean = false;
  email:string;
  password: string;


  constructor() { }

  ngOnInit(): void {
  }

  navigateToReg(){
    
  }

}
