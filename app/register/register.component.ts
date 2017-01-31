import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(rb:FormBuilder) {
    this.loginForm=rb.group({
      'firstName':["Anusha",Validators.maxLength(6)]
    })
   }

  ngOnInit() {

  }

  register={


  } // register object to store form data

  loginForm:FormGroup

  registerUser(){
   console.log(this.register);
 } // output
 Countries=[{"code":"PK","name":"Pakisthan"},{"code":"NK","name":"North Korea"},{"code":"USA","name":"America"}]; //array of country with code and name

 submitForm(anusha:any){

   console.log(anusha);

 }
//submitting all kinds of data types in the form using any data type

}



