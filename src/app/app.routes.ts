import { Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductDetailComponent,
  },
];
