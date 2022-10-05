import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
})
export class ProductDepartmentComponent {
  @Input() product: Product;

  constructor() {
    this.product = Product.empty();
  }
}
