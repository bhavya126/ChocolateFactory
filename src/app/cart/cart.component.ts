import { Chocolate } from './../chocolate.model';
import { ChocolatesService } from './../chocolates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  chocolates: Chocolate[];
  chocolatesInCart: Chocolate[] = [];
  cartTotal = 0;
  constructor(private chocolatesService: ChocolatesService) { }

  ngOnInit(): void {
    this.chocolatesService.chocolates.subscribe(result => {
      this.chocolates = result;
    });
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.chocolates.length; i++) {
      if (this.chocolates[i].countInCart > 0){
        this.chocolatesInCart.push(this.chocolates[i]);
      }
    }
    this.total();
  }
  total(): void{
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.chocolatesInCart.length; i++) {
      if (this.chocolatesInCart[i].countInCart > 0){
        this.cartTotal += this.chocolatesInCart[i].price * this.chocolatesInCart[i].countInCart;
      }
    }
  }
  deleteChocolate(p: Chocolate): void{
    const i = this.chocolates.indexOf(p);
    const j = this.chocolatesInCart.indexOf(p);
    this.cartTotal -= this.chocolates[i].countInCart * this.chocolates[i].price;
    this.chocolatesInCart.splice(j, 1);
    this.chocolates[i].countInCart = 0;
  }

  increaseCountInCart(p: Chocolate): void{
    const i = this.chocolates.indexOf(p);
    const j = this.chocolatesInCart.indexOf(p);
    this.cartTotal += this.chocolates[i].price;
    this.chocolates[i].countInCart += 1;
  }

  decreaseCountInCart(p: Chocolate): void{
    const i = this.chocolates.indexOf(p);
    const j = this.chocolatesInCart.indexOf(p);
    this.cartTotal -=  this.chocolates[i].price;
    this.chocolates[i].countInCart -= 1;
    if (this.chocolates[i].countInCart < 1){
      this.chocolatesInCart.splice(j, 1);
    }
  }
}
