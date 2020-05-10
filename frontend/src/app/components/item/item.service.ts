import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { Item } from './item.model';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  baseUrl = "http://localhost:3001/items"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'x',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }
//função que irá inserir um novo item no backend e mandar uma requisição http para o backend
  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.baseUrl, item).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
  }


  read(): Observable<Item[]> {
    return this.http.get<Item[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Item> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Item>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
  }
  update(item: Item): Observable<Item>{
    const url = `${this.baseUrl}/${item.id}`
    return this.http.put<Item>(url, item).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
  }

  delete(id: number): Observable<Item> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Item>(url).pipe(map((obj) => obj),
    catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!",true)
    return EMPTY

  }
}

