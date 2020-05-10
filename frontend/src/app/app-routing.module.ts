import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BudgetComponent } from './views/budget/budget.component';
import { BudgetCreateComponent } from './components/budget/budget-create/budget-create.component';
import { ItemCrudComponent } from './views/item-crud/item-crud.component';
import { ItemCreateComponent } from './components/item/item-create/item-create.component';
import { ItemUpdateComponent } from './components/item/item-update/item-update.component';
import { ItemDeleteComponent } from './components/item/item-delete/item-delete.component';
import { BudgetUpdateComponent } from './components/budget/budget-update/budget-update.component';




const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "items",
    component: ItemCrudComponent
  },
  {
    path: "items/create",
    component: ItemCreateComponent
  },
  {
    path: "items/update/:id",
    component: ItemUpdateComponent
  },
  {
    path: "budget",
    component: BudgetComponent
  },
  {
    path: "budget/update",
    component: BudgetUpdateComponent
  },
  {
    path: "budget/create",
    component: BudgetCreateComponent
  },
  {
    path: "items/delete/:id",
    component: ItemDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
