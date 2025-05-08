import { SelectorContext } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Respuesta } from 'src/app/models/respuesta';
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
     this.booksService.getOne(id).subscribe((resp:Respuesta)=>{
        if (!resp.error)
        {
          this.libroActual= resp.mensaje
          alert("libro encontrado")
         
            this.bookForm.patchValue({
              title: this.libroActual.title,
              author: this.libroActual.author,
              price: this.libroActual.price,
              type: this.libroActual.type,
              id_user: this.libroActual.id_user,
              photo: this.libroActual.photo
    
            })
          
          
        }else {alert("libro no encontrado")}
      })
      
    }

  }
  onSubmit(): void {
    if (this.bookForm.valid && this.libroActual && this.buscarId) {
      
      
      const libroActualizado: Book = {
        id_book: this.buscarId,
        id_user: this.bookForm.get('id_user').value,
        title: this.bookForm.get('title').value,
        author: this.bookForm.get('author').value,
        type: this.bookForm.get('type').value,
        price: this.bookForm.get('price').value,
        photo: this.bookForm.get('photo').value
      };

      this.booksService.edit(libroActualizado).subscribe({
        next: (resp: Respuesta) => {
          if (!resp.error) {
            this.eventoActualizar.emit(this.buscarId);
            this.router.navigate(['/books']);
          } 
          
        },
        error: (err) => {
         alert(`${err}`)
        }
      });
    } 
  }

  ngOnInit(): void {
    // Inicialización adicional si es necesaria
  }
}