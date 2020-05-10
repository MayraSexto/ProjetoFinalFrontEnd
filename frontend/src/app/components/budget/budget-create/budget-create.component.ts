import { Budget } from './../budget.model';
import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.css']
})
export class BudgetCreateComponent implements OnInit {
  form: FormGroup;
  budget: Budget = {
    description: '',
    budgetValue: null

  }

  constructor(private budgetService: BudgetService,
    private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      budgetValue: new FormControl(null,[Validators.required, Validators.min(0.1)]),
    });
  }

  createBudget(): void {
    this.budgetService.create(this.budget).subscribe(() => { 
      this.budgetService.showMessage('Budget inserido!!')
      this.router.navigate(['/budget'])
    })    
  }

  cancel(): void {
    this.router.navigate(['/budget'])
  }


}


