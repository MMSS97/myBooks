import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  public myBooks:Book[]=[];
  
  
  
 
  constructor(private booksService:BooksService
              
  ){
    this.booksService.books=null
  }
  ngOnInit(){
 this.cargarLibros()

  }
  public cargarLibros():void {
    this.booksService.getAll().subscribe(
        (data: Book[]) => {
            this.myBooks = data;
        },
        error => {
            console.error('Error al cargar libros:', error);
        }
    );
  }
  
 public eliminar(id:number): void {
  this.booksService.eliminar(id).subscribe(
      () => {
          this.cargarLibros(); 
      },
      error => {
          console.error('Error al eliminar libro:', error);
      }
  );
}
 
}