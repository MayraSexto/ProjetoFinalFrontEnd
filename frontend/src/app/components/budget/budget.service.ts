import { Budget } from "./budget.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MatSnackBar } from "@angular/material/snack-bar";
import { map, catchError } from "rxjs/operators";
import { Observable, EMPTY } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BudgetService {
  baseUrl = "http://localhost:3001/budget";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "x", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.baseUrl, budget).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Budget> {
    return this.http.get<Budget>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    if (e.status != 404) {
      this.showMessage("Ocorreu um erro!", true);
      return EMPTY;
    }
  }
}
