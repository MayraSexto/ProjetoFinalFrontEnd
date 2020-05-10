import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item.model';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {
  form: FormGroup;
  item: Item = {
    name:'',
    price: null,
    quantity: null
  }

  constructor(private itemService: ItemService,
    private router: Router) { 

    }

   
    
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl(null,[Validators.required, Validators.min(0.1)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  createItem(): void {
      this.itemService.create(this.item).subscribe(() => { 
        this.itemService.showMessage('Item criado!!')
        this.router.navigate(['/items'])
      })
  }

  cancel(): void {
    this.router.navigate(['/items'])
  }

}
