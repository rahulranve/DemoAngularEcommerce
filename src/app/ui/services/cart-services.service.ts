import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  public cartItemList: any[] = [];
  public productList = new BehaviorSubject<any[]>([]);

  constructor() {
    const cartItems = localStorage.getItem('cartItems');
    if (cartItems) {
      this.cartItemList = JSON.parse(cartItems);
      this.productList.next(this.cartItemList);
    }
  }

  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
    this.saveCartItems();
  }

  addtoCart(product: any) {                                                                     
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.saveCartItems();
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.forEach((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(product: any) {
    const index = this.cartItemList.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      this.cartItemList.splice(index, 1);
      this.productList.next(this.cartItemList);
      this.saveCartItems();
    }
  }

  removeAllCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
    this.saveCartItems();
  }

   saveCartItems() {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItemList));
  }
}
