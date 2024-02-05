import { ChocolatesService } from './../chocolates.service';
import { Component, OnInit } from '@angular/core';
import { Chocolate } from '../chocolate.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  added: boolean;
  filter: string;
  chocolates: Chocolate[];
  constructor(private chocolatesService: ChocolatesService) { }

  ngOnInit(): void {
    this.chocolatesService.chocolates.subscribe(result => {
      this.chocolates = result;
    });
    this.chocolatesService.getValue().subscribe((value) => {
      this.filter = value;
    });
  }
  increaseCountInCart(chocolate: Chocolate): number{
    this.chocolates[chocolate.id].countInCart += 1;
    return this.chocolates[chocolate.id].countInCart;
  }
  decreaseCountInCart(chocolate: Chocolate): number{
    this.chocolates[chocolate.id].countInCart -= 1;
    return this.chocolates[chocolate.id].countInCart;
  }

}
