import {Component, OnInit} from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
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
  styleUrl: './laptops-list.component.scss'
})
export class LaptopsListComponent implements OnInit {
  title = 'New Laptops.ts'
  Details: string[] = ['serialNumber', 'brand', 'model', 'storage', 'isAvailable?']
  laptopsArray: Laptops[] = [];


  constructor(private laptopsService: LaptopsService, private router: Router) {
  }

  ngOnInit(): void {
    this.laptopsService.getLaptops().subscribe({
      next: (data: Laptops[]) => this.laptopsArray = data,
      error: err => console.error("error fetching laptops", err)
    });
  }

  editLaptop(serialNumber: string): void {
    this.router.navigate(['/modify', serialNumber]);
  }

  deleteLaptop(serialNumber: string): void {
    this.laptopsService.deleteLaptop(serialNumber).subscribe({
      next: () => {
        this.laptopsArray = this.laptopsArray.filter(laptop => laptop.serialNumber !== serialNumber);
      },
      error: err => console.error("error deleting laptop", err)
    });
  }
}
