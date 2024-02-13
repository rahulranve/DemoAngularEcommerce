import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIRoutingModule } from './ui-routing.module';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductsComponent } from './products/products.component';
import {MatCardModule} from '@angular/material/card';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import {MatBadgeModule} from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    UIRoutingModule,
    BrowserModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,    
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule
    
  ],
  exports:[HeaderComponent,
  ProductsComponent,
  CartComponent,
  HomeComponent,

  ]

  
})
export class UIModule { }
