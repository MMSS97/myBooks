import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public miuser:User
  public id:number
  public name:string
  public last_name:string
  public email:string
  public photo:string

  constructor() {
    this.miuser= new User (
      123,"Pedro","Lucillos", "pedrolucillos@peep.com","/assets/imagenes/pedro.jpg","palometa"
    )

  }
  ngOnInit(): void {}

  public editar1(nuevonombre: HTMLInputElement) {
    this.miuser.name = nuevonombre.value
    console.log(this.miuser.name)

  }
  public editar2(nuevoapellido: HTMLInputElement) {
    this.miuser.last_name = nuevoapellido.value
    console.log(this.miuser.last_name)

  } public editar3(nuevocorreo: HTMLInputElement) {
    this.miuser.email = nuevocorreo.value
    console.log(this.miuser.email)

  } public editar4(nuevaFoto: HTMLInputElement) {
    this.miuser.photo = nuevaFoto.value
    console.log(this.miuser.photo)

  }

}