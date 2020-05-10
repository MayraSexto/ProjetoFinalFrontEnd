import { Budget } from './../../components/budget/budget.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from 'src/app/components/budget/budget.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {

  budget: Budget;
  constructor(private router: Router,private budgetService: BudgetService) { }

  ngOnInit() {
    this.budgetService.read().subscribe(budget => {
      this.budget = budget
    })
  }


  navigateToAddBudget() {
    this.router.navigate(['/budget/create'])
  }
  
  checkBudget(): boolean {
    return this.budget.budgetValue ? true : false;
  }
}