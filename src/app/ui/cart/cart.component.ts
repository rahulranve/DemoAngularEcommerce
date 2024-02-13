import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartServicesService } from '../services/cart-services.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any[] = [];
  public grandTotal!: number;
  @Output() grandTotalEmitter = new EventEmitter<number>();



  constructor(private cartService: CartServicesService) {}

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.calculateGrandTotal();
  }

  emptyCart() {
    this.cartService.removeAllCart();
    this.products = [];
    this.grandTotal = 0;
  }

  incrementQuantity(item: any) {
    item.quantity += 1;
    item.total = item.quantity * item.price;
    this.calculateGrandTotal();
    this.cartService.saveCartItems();
  }

  decrementQuantity(item: any) {
    if (item.quantity > 0) {
      item.quantity -= 1;
      item.total = item.quantity * item.price;
      this.calculateGrandTotal();
      this.cartService.saveCartItems();
    }
  }

  calculateGrandTotal() {
    this.grandTotal = this.products.reduce((total: number, item: any) => total + item.total, 0);
    this.grandTotalEmitter.emit(this.grandTotal); // Emit grand total value

  }
}
 