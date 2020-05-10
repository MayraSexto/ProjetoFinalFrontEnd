import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { Router } from '@angular/router';
import { Budget } from 'src/app/components/budget/budget.model';
import { BudgetService } from 'src/app/components/budget/budget.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  budget: Budget
  
  constructor(private budgetService: BudgetService, private headerService: HeaderService, private router: Router) {
    this.headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    }
   
  }

  ngOnInit() {
    this.budgetService.read().subscribe(budget => {
      this.budget = budget
    })
  }

  navigateToBudget(): void {
    this.router.navigate(['/budget'])
  }

  getButtonLabel() {
    return this.budget.budgetValue ? 'Vá para seu Budget' : 'Começe Já!'
  }

}
