import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Laptops} from "../Shared/Models/Laptops";
import {JsonPipe, NgFor, NgForOf} from "@angular/common";
import {LaptopsListItemComponent} from "../laptops-list-item/laptops-list-item.component";
import {laptopsArray} from "../Shared/mockLaptops";
import {Observable} from "rxjs";
import {LaptopsService} from "../services/laptops.service";

// @ts-ignore
@Component({
  selector: 'app-laptops-list',
  standalone: true,
  imports: [RouterOutlet, NgForOf, JsonPipe, LaptopsListItemComponent],
  templateUrl: './laptops-list.component.html',
  styleUrl: './laptops-list.component.css'
})
export class LaptopsListComponent implements OnInit{
  title = 'New Laptops.ts'

  laptops: Laptops[]= [];

  constructor(private laptopsService: LaptopsService) {}

  ngOnInit():void {
    this.laptopsService.getLaptops().subscribe({
      next: (data: Laptops[]) => this.laptops = data,
      error: err=> console.error("error fetching laptops",err)
    });
  }

}
