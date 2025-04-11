import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from "./product-card/product-card.component";

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products = signal<Product[]>([

    {
      id: 1,
      title: 'Product 1',
      image: 'https://via.placeholder.com/150',
      price: 100,
      stock: 10
    },
    {
      id: 2,
      title: 'Product 2',
      image: 'https://via.placeholder.com/150',
      price: 200,
      stock: 20
    },
    {
      id: 3,
      title: 'Product 3',
      image: 'https://via.placeholder.com/150',
      price: 300,
      stock: 30
    },
    {
      id: 4,
      title: 'Product 4',
      image: 'https://via.placeholder.com/150',
      price: 200,
      stock: 20
    }
  ]);
}
