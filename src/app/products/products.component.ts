import { Component, OnInit } from '@angular/core';
import { productslist } from './products-list';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = productslist;
  constructor() { }

  ngOnInit(): void {
  }

}
