import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../services/cart-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public totalItem:number=0
constructor(private cartService:CartServicesService)
{

}


  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.totalItem =res.length
    })
  }



}
