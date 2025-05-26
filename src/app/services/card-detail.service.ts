import { Injectable } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';

export interface ProductDetail {
  title: string;
  image: string;
  category: string;
  price: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardDetailService {
  constructor(private apiConnection: ApiConnectionService) {}

  modifyInfo(data: any): ProductDetail {
    const info: ProductDetail = {
      title: data.title,
      image: data.image,
      category: data.category,
      price: data.price,
      description: data.description,
    };

    return info;
  }
}
