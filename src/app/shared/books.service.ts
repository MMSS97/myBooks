import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books:Book[];
  constructor(
  ) { 
    this.books=[
      new Book (4,5, "Así habló Zaratustra","Filosofía","Nietzsche",9,"/assets/imagenes/asi hablo z.jpg"),
      new Book(123,333,"El Principito","Novela corta", "Antoine de Saint-Exupéry",8,"/assets/imagenes/el principito.jpg"),
      new Book (588,4,"El alquimista", "Novela", "Paulo Cohelo", 12,"/assets/imagenes/el alquimissta.jpg"),
      new Book (488,645,"Romper la barrera del no","Manual de negociación","Chris Voss",20,"/assets/imagenes/romper la barrera.jpg"),   
      new Book(92929,933,"BE 2.0","Empresa","Jim Collier y Bill Lazier",25,"/assets/imagenes/be 2.0.jpg"),
      new Book (124,333,"la practica de la inteligencia emocional","Psicologia","D. Goleman",12,"/assets/imagenes/inteligencia.jpg"),
      new Book (233,5544,"Crianza activa","Educacion","Nora Kurtin",15,"/assets/imagenes/crianza.jpg")
    ]
  }
  
  getAll():Book[]{
    return this.books
  }
  getOne(id_libro:number): Book | undefined{
    return this.books.find(libro=>libro.id_book===id_libro)

  }
  add(book:Book):void{
    this.books.push(book)
  }
  edit(book:Book):boolean{
    if (!book || !book.id_book){
      console.error("dotos del libro no validos")
      return false
    }
    let index = this.books.findIndex(libro=>libro.id_book===book.id_book)
  
    if(index === -1){
      console.warn(`id del libro ${book.id_book} no encontrado`)
      return false
  }
  this.books[index]={
    ...this.books[index],
    ...book
    
  }
   return true
  
  }
  eliminar(id_book:number):boolean{
    const initialLength= this.books.length
    this.books=this.books.filter(book=>book.id_book!==id_book)
    return initialLength===this.books.length

}}
