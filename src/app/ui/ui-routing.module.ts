import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products' , component:ProductsComponent},
  {path:'cart/products', component:ProductsComponent},
  {path:'cart' , component:CartComponent},
  {path:'cart/checkout' , component:CheckoutComponent},
  {path:'',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UIRoutingModule { }
