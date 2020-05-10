import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../item.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  form: FormGroup;
  item: Item

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      price: new FormControl(null,[Validators.required, Validators.min(0.1)]),
      quantity: new FormControl(null, [Validators.required, Validators.min(1)])
    });

    const id = +this.route.snapshot.paramMap.get('id')
    this.itemService.readById(id).subscribe(item => {
      this.item = item
    });

  }

  updateItem(): void {
    this.itemService.update(this.item).subscribe(() => {
      this.itemService.showMessage('Item atualizado com sucesso')
      this.router.navigate(["/items"]);
    });
  }

  cancel(): void {
    this.router.navigate(['/items'])
  }

}
