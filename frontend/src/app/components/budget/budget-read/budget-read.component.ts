import { Budget } from './../budget.model';
import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router } from '@angular/router';
import { Item } from '../../item/item.model';
import { ItemService } from '../../item/item.service';

@Component({
  selector: 'app-budget-read',
  templateUrl: './budget-read.component.html',
  styleUrls: ['./budget-read.component.css']
})
export class BudgetReadComponent implements OnInit {

  budget: Budget
  items: Item[]
  
  constructor(private budgetService: BudgetService,private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {
    this.budgetService.read().subscribe(budget => {
      this.budget = budget
    })

    this.itemService.read().subscribe(items => {
      this.items = items
    })
  }

  updateBudget() {
    this.router.navigate(['/budget/update'])
  }

  getTotalCost() {
    return this.items.map(item => item.price * item.quantity).reduce((acc, value) => acc + value, 0);
  }

}
