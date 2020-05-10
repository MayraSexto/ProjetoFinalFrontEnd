import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item-delete.component.html',
  styleUrls: ['./item-delete.component.css']
})
export class ItemDeleteComponent implements OnInit {

  item: Item

  constructor(private itemService: ItemService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.readById(id).subscribe((item) => {
      this.item = item
    })
  }

  deleteItem(): void {
    this.itemService.delete(this.item.id).subscribe(() => {
      this.itemService.showMessage('Item excluido com sucesso!')
      this.router.navigate(['/items']);
    })

  }
  cancel(): void {
    this.router.navigate(['/items'])

  }

}
