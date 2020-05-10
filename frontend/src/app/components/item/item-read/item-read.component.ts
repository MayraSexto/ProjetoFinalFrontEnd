import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../item.model';


@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {

  items: Item[]
  displayedColumns = ['id', 'name', 'quantity', 'price', 'action']
  
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.read().subscribe(items => {
      this.items = items
    })
  }

  getTotalCost() {
    return this.items.map(item => item.price * item.quantity).reduce((acc, value) => acc + value, 0);
  }



}
