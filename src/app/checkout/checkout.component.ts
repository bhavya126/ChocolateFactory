import { ChocolatesService } from './../chocolates.service';
import { Component, OnInit } from '@angular/core';
import { Chocolate } from '../chocolate.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  chocolates: Chocolate[];
  cartTotal = 0;
  constructor(private chocolatesService: ChocolatesService) { }

  ngOnInit(): void {
    this.chocolatesService.chocolates.subscribe(result => {
      this.chocolates = result;
    });
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.chocolates.length; i++) {
      if (this.chocolates[i].countInCart > 0){
        this.cartTotal += this.chocolates[i].countInCart * this.chocolates[i].price;
      }
    }
  }
  goHome(): void{
    location.assign('');
  }

}
