import { ChocolatesService } from './../chocolates.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  filter: string;
  constructor(private chocolatesService: ChocolatesService) { }

  ngOnInit(): void {

  }
  setFilter(category: string): void{
    this.chocolatesService.setValue(category);
  }
}
