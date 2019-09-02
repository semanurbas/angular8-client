
import { UserDetailsComponent } from './user-details/user-details.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'addUser', component: CreateUserComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'addProduct', component: CreateProductComponent },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: 'orders', component: OrderListComponent },
  { path: 'addOrder', component: CreateOrderComponent },
  { path: 'orderDetails/:id', component: OrderDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }