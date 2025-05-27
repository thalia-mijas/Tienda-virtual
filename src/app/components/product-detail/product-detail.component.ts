import { CurrencyPipe, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectionService } from '../../services/api-connection.service';
import {
  CardDetailService,
  ProductDetail,
} from '../../services/card-detail.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CurrencyPipe, TitleCasePipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  product: Partial<ProductDetail>;
  productId: string = '';

  constructor(
    private mapRoute: ActivatedRoute,
    private apiConnection: ApiConnectionService,
    private filterData: CardDetailService
  ) {
    this.product = {};
    this.mapRoute.paramMap.subscribe((params) => {
      this.productId = params.get('id')!;
    });
    this.apiConnection.getProduct(this.productId).subscribe({
      next: (data) => {
        this.product = this.filterData.modifyInfo(data);
      },
      error: (error) => console.error(error),
    });
  }
}
