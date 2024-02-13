import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../services/cart-services.service';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {


  public productlist: any;
  constructor(private service: ServiceService, private cartService: CartServicesService) { }
  ngOnInit(): void {
 
    this.service.getProduct().subscribe(
      res=>{
        this.productlist=res;
        this.productlist.forEach((a:any)=>{
          Object.assign(a,{quantity:1,total:a.price})
        });
      }
    )
  }

  addToCart(item: any) {
    this.cartService.addtoCart(item);
    
  }

}
