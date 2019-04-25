import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout-list',
  templateUrl: './checkout-list.component.html',
  styleUrls: ['./checkout-list.component.scss']
})
export class CheckoutListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  displayedColumns: string[] = ['item', 'quantidade', 'cost'];
  transactions: any[] = [
    { item: 'Beach ball', quantidade:1, cost: 4 },
    { item: 'Towel', quantidade:1, cost: 5 },
    { item: 'Frisbee', quantidade:1, cost: 2 },
    { item: 'Sunscreen', quantidade:1, cost: 4 },
    { item: 'Cooler', quantidade:1, cost: 25 },
    { item: 'Swim suit', quantidade:1, cost: 15 },
  ];

}
