import { Injectable } from '@angular/core';
import { ApiConnectionService } from './api-connection.service';

export interface Product {
  id: number;
  category: string;
  title: string;
  image: string;
  price: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor(private apiConnection: ApiConnectionService) {}

  modifyInfo(data: any): Product[] {
    return data.map((item: any) => ({
      id: item.id,
      category: item.category,
      title: item.title,
      image: item.image,
      price: item.price,
    }));
  }
}
