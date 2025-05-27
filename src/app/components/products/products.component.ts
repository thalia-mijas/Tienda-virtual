import { CommonModule, CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiConnectionService } from '../../services/api-connection.service';
import { CardService, Product } from '../../services/card.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: Product[] = [];
  categories: string[] = [];
  allProducts: Product[] = [];

  constructor(
    private apiConnection: ApiConnectionService,
    private filterData: CardService
  ) {
    this.apiConnection.getProducts().subscribe({
      next: (data) => {
        this.allProducts = this.filterData.modifyInfo(data);
        this.products = [...this.allProducts];
        this.categories = data.map((item: any) => item.category);
        this.categories.push('all');
        this.categories = [...new Set(this.categories)];
      },
      error: (error) => console.error(error),
    });
  }

  filterCategory(category: string) {
    if (category === 'all') {
      this.products = [...this.allProducts];
    } else {
      this.products = this.allProducts.filter(
        (product) => product.category === category
      );
    }
  }
}
