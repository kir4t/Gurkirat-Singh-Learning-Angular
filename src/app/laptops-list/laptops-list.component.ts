import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Laptops} from "../Shared/Models/Laptops";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";
import {LaptopsListItemComponent} from "../laptops-list-item/laptops-list-item.component";
import {laptopsArray} from "../Shared/mockLaptops";

// @ts-ignore
@Component({
  selector: 'app-laptops-list',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, LaptopsListItemComponent],
  templateUrl: './laptops-list.component.html',
  styleUrl: './laptops-list.component.css'
})
export class LaptopsListComponent {
  title = 'New Laptops.ts'

  ArrayList: Laptops[] = laptopsArray;

}
