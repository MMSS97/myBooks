import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{

  public myBooks:Book[]=[];
  
 
  constructor(private booksService:BooksService){}
  ngOnInit(){
    this.myBooks= this.booksService.getAll()
  }
  
 public eliminar(id:number){
  this.booksService.eliminar(id);
  this.myBooks=this.booksService.getAll()
   }
 

  }