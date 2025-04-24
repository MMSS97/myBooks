import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User
  ngOnInit(): void {  }
  constructor(){
    this.user=new User(0,"","","","","")
  }
onSubmit(form:NgForm){
  console.log(this.user)
  console.log(form.value)
}
}
