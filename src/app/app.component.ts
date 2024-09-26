import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Laptops} from "./Shared/Models/Laptops";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";
import {LaptopsListComponent} from "./laptops-list/laptops-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, LaptopsListComponent],
  templateUrl:'./app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'New Laptops'

  Laptop1 : Laptops = {serialNumber: "1111A", brand: "Apple", model: "mac pro", storage:  256, isAvailable: true};
  Laptop2 : Laptops = {serialNumber: "2222B", brand: "Hp", model: "Pavilion", storage:  512, isAvailable: true};
  Laptop3 : Laptops = {serialNumber: "3333C", brand: "Think Pad", model: "X1 carbon", storage:  256, isAvailable: true};
  Laptop4 : Laptops = {serialNumber: "4444D", brand: "Lenovo", model: "G2 max", storage:  256, isAvailable: false};
  Laptop5 : Laptops = {serialNumber: "5555E", brand: "Asus", model: "  book 15", storage:  512, isAvailable: false}
  Laptop6 : Laptops = {serialNumber: "6666F", brand: "Apple", model: "  mac pro max", storage:  512, isAvailable: false}



  ArrayList: Laptops[] =
    [this.Laptop1,this.Laptop2, this.Laptop3, this.Laptop4, this.Laptop5, this.Laptop6]
}
