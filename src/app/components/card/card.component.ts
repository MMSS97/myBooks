import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() book: Book
  @Output() eventoEliminar = new EventEmitter<number>()

  
  eliminarLibro(){
    console.log("id del  libro a eliminar",this.book.id_book)
    this.eventoEliminar.emit(this.book.id_book)

  }
   ngOnInit(){
   
   }
  
   
  
  constructor(public booksService:BooksService){}
 
}
