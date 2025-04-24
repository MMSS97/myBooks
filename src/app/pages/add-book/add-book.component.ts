import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  nuevoLibro:Book = new Book (null,null,"","","",null,"")
  constructor(private booksService: BooksService){}

  botonSubir(){  
    this.booksService.add(this.nuevoLibro)
    
    this.nuevoLibro = new Book (null,null,"","","",null,"")}

    ngOnInit(): void {
      
    }

  


}
