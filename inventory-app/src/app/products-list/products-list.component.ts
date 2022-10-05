import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;
  private currentProduct: Product;

  constructor() {
    this.productList = [];
    this.onProductSelected = new EventEmitter<Product>();
    this.currentProduct = Product.empty();
  }

  clicked = (product: Product): void => {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  };

  isSelected = ({ sku }: Product) => sku === this.currentProduct.sku;
}
