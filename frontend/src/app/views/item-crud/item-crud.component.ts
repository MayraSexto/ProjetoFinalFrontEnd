import { HeaderService } from 'src/app/components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BudgetService } from 'src/app/components/budget/budget.service';
import { Budget } from 'src/app/components/budget/budget.model';

@Component({
  selector: 'app-item-crud',
  templateUrl: './item-crud.component.html',
  styleUrls: ['./item-crud.component.css']
})
export class ItemCrudComponent implements OnInit {
  budget: Budget;

  constructor(private router: Router, private headerService: HeaderService,private budgetService: BudgetService,) { 
    this.headerService.headerData = {
      title: 'Cadastro de Itens',
      icon: 'storefront',
      routeUrl: '/items'
    }
  }

  ngOnInit(): void {
    this.budgetService.read().subscribe(budget => {
      this.budget = budget
    })
  }

  navigateToItemCreate(): void {
    this.router.navigate(['/items/create'])
  }
}
