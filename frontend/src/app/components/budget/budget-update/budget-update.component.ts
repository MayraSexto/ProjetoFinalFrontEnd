import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Router } from '@angular/router';
import { Budget } from '../budget.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-budget-update',
  templateUrl: './budget-update.component.html',
  styleUrls: ['./budget-update.component.css']
})
export class BudgetUpdateComponent implements OnInit {
  form: FormGroup;
  budget : Budget

  constructor(private budgetService: BudgetService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      budgetValue: new FormControl(null,[Validators.required, Validators.min(0.1)]),
    });
    this.budgetService.read().subscribe(budget => {
      this.budget = budget;
    });
  }

  updateBudget(): void {
    this.budgetService.create(this.budget).subscribe(() => { 
      this.budgetService.showMessage('Budget atualizado!!')
      this.router.navigate(['/budget'])
    })
  }

  cancel(): void {
    this.router.navigate(['/budget'])
  }
}
