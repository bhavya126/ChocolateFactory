import { ChocolatesService } from './../chocolates.service';
import { Chocolate } from './../chocolate.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
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
