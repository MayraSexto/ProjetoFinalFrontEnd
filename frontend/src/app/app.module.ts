import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//criados com base na biblioteca do materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ItemReadComponent } from './components/item/item-read/item-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule}  from '@angular/material/icon';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { BudgetComponent } from './views/budget/budget.component';
import { BudgetCreateComponent } from './components/budget/budget-create/budget-create.component';
import { BudgetReadComponent } from './components/budget/budget-read/budget-read.component';
import { ItemUpdateComponent } from './components/item/item-update/item-update.component';
import { ItemDeleteComponent } from './components/item/item-delete/item-delete.component';
import { BudgetUpdateComponent } from './components/budget/budget-update/budget-update.component';
import {MatGridListModule} from '@angular/material/grid-list';

registerLocaleData(localePt)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ItemCrudComponent,
    BudgetComponent,
    BudgetCreateComponent,
    BudgetReadComponent,
    BudgetUpdateComponent,
    ItemCreateComponent,
    ItemReadComponent,
    ItemUpdateComponent,
    ItemDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-PT'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
