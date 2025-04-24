import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  
 
 @Output () eventoActualizar= new EventEmitter <number>();
 @Input() book: Book
  myBooks=this.booksService.getAll()
  bookForm:FormGroup
  buscarId:number|null=null
  libroActual: Book |null=null
  constructor(private booksService: BooksService,
              private formBuilder:FormBuilder,
              private router: Router
  )
  {
    this.bookForm = this.formBuilder.group({
      title: [, Validators.required],
      author: [, Validators.required],
      type: [, Validators.required],
      price:[, Validators.required],
      id_user:[, Validators.required],
      photo: [, Validators.required],
      buscarId: [, Validators.required]
  
    })
    
  }
  
  busqueda():void {
    const id = this.bookForm.get('buscarId')?.value
    if (id){
      this.buscarId=id
      this.libroActual= this.booksService.getOne(id)
      if (this.libroActual){
        this.bookForm.patchValue({
          title: this.libroActual.title,
          author: this.libroActual.author,
          price: this.libroActual.price,
          type: this.libroActual.type,
          id_user: this.libroActual.id_user,
          photo: this.libroActual.photo

        })
      }
    }

  }
  onSubmit():void {
    let libroActualizado : Book ={
      id_book: this.buscarId,
      id_user: this.libroActual?.id_user||1,
      ...this.bookForm.value
    }
    if(this.booksService.edit(libroActualizado)){
      alert("¡Libro actualizadocon exito!")
      this.router.navigate(['/books']);
    } else {
      alert('Error al actualizar el libro');
    }
    }
   



 
  
  
  ngOnInit(): void {
    
  }

}
