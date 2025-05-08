import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Respuesta } from '../models/respuesta';
import { ResolveData } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = "http://localhost:3000/books"
  public books:Book[]|null;
  public book: Book
  constructor(private http: HttpClient) {
    this.book = null
  }
  
  getAll():Observable<Book[]>{
    return this.http.get<Book[]>(this.url)
  }
  getOne(id_libro:number): Observable<Respuesta> {
    return this.http.get<Respuesta>(`${this.url}/${id_libro}`)

  }
  add(newBook:Book): Observable<Book> { 
    return this.http.post<Book>(this.url, newBook)
  }
  edit(book:Book):Observable<Respuesta>{
    return this.http.put<Respuesta>(`${this.url}/${book.id_book}`, book)
   
  }
 
  eliminar(id_book:number):Observable<Book>{
   
    return this.http.delete<Book>(`${this.url}/${id_book}`)

}


}
