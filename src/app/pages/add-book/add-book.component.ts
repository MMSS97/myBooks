import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent{
  nuevoLibro:Book = new Book (null,null,"","","",null,"")
  constructor(private booksService: BooksService){}

  botonSubir()
  {
    this.booksService.add(this.nuevoLibro).subscribe({
      next: (addedBook: Book) => {
        console.log('Libro añadido:', addedBook);
        this.resetForm()
      },
      error: (err) => {
        console.error('Error añadiendo libro:', err);
      }
    });
  }
    resetForm():void{
    this.nuevoLibro = new Book (null,null,"","","",null,"")}
   

  


}
