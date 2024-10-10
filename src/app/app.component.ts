import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Laptops} from "./Shared/Models/Laptops";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";
import {LaptopsListComponent} from "./laptops-list/laptops-list.component";
import {LaptopsListItemComponent} from "./laptops-list-item/laptops-list-item.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {LaptopsService} from "./services/laptops.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, LaptopsListComponent, LaptopsListItemComponent, NavbarComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'New Laptops'
  Details:string[]=['serialNumber','brand','model','storage','isAvailable?']
  laptopsArray: Laptops[] =[];
  constructor(private laptopsService: LaptopsService) {}

  ngOnInit():void {
    this.laptopsService.getLaptops().subscribe({
      next: (data: Laptops[]) => this.laptopsArray = data,
      error: err=> console.error("error fetching laptops",err)
    });
  }
}
