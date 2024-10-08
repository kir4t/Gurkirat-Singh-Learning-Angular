import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Laptops} from "./Shared/Models/Laptops";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";
import {LaptopsListComponent} from "./laptops-list/laptops-list.component";
import {LaptopsListItemComponent} from "./laptops-list-item/laptops-list-item.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, LaptopsListComponent, LaptopsListItemComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'New Laptops'

  Laptop1 : Laptops = {serialNumber: "1111A", brand: "Apple", model: "mac pro", storage:  256, isAvailable: true};



  ArrayList: Laptops[] =
    [this.Laptop1]
}
