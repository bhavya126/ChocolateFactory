import { Chocolate } from './chocolate.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChocolatesService {
  filterCategory: BehaviorSubject<string>;
  private chocolatesList = new BehaviorSubject<Chocolate[]>([
    {id: 0, category: 'dark', image: '/assets/images/darkChocolate/darkChocolateHazzlenut.jpg', name: 'Dark Chocolate with Hazzlenut(100g)', price: 140, countInCart: 0},
    {id: 1, category: 'dark', image: '/assets/images/darkChocolate/darkChocolateNougat.png', name: 'Dark Chocolate-covered Nougat(100g)', price: 120, countInCart: 0},
    {id: 2, category: 'dark', image: '/assets/images/darkChocolate/darkChocolateResins.jpg', name: 'Dark Chocolate-covered Raisins(100g)', price: 200, countInCart: 0},
    {id: 3, category: 'dark', image: '/assets/images/darkChocolate/darkChocolateSolid.png', name: 'Dark Chocolate Bar(100g)', price: 110, countInCart: 0},
    {id: 4, category: 'milk', image: '/assets/images/milkChocolate/milkChocolateCaramel.jpg', name: 'Caramel filled Milk Chocolate(100g)', price: 140, countInCart: 0},
    {id: 5, category: 'milk', image: '/assets/images/milkChocolate/milkChocolateResins.jpg', name: 'Milk Chocolate-covered Raisins(100g)', price: 180, countInCart: 0},
    {id: 6, category: 'milk', image: '/assets/images/milkChocolate/milkChocolateSolid.png', name: 'Milk Chocolate Bar(100g)', price: 100, countInCart: 0},
    {id: 7, category: 'milk', image: '/assets/images/milkChocolate/milkChocolateWafers.jpg', name: 'Milk Chocolate Wafer(100g)', price: 110, countInCart: 0},
    {id: 8, category: 'white', image: '/assets/images/whiteChocolate/whiteChocolateChocoChips.jpg', name: 'White Choco Chips(100g)', price: 80, countInCart: 0},
    {id: 9, category: 'white', image: '/assets/images/whiteChocolate/whiteChocolateCrunchBars.jpg', name: 'White Chocolate Crunch Bar(100g)', price: 135, countInCart: 0},
    {id: 10, category: 'white', image: '/assets/images/whiteChocolate/whiteChocolateSolid.jpg', name: 'White Chocolate Bar(100g)', price: 120, countInCart: 0},
    {id: 11, category: 'white', image: '/assets/images/whiteChocolate/whiteChocolateSwirledFudge.jpg', name: 'White Chocolate Swirled-Fudge(100g)', price: 145, countInCart: 0}
  ]);
  chocolates = this.chocolatesList.asObservable();
  constructor() {
    this.filterCategory = new BehaviorSubject<string>('all');
  }
 
  setValue(newValue): void {
    this.filterCategory.next(newValue);
  }
  getValue(): Observable<string>{
    return this.filterCategory.asObservable();
  }
}
