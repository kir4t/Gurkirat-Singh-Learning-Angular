import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Laptops } from "../Shared/Models/Laptops";
import { LaptopsService } from "../services/laptops.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-laptops-list',
  templateUrl: './laptops-list.component.html',
  standalone: true,
  imports: [
    NgForOf
  ],
  styleUrls: ['./laptops-list.component.scss']
})
export class LaptopsListComponent implements OnInit {
  laptopsArray: Laptops[] = [];

  constructor(private laptopsService: LaptopsService, private router: Router) {}

  ngOnInit(): void {
    this.laptopsService.getLaptops().subscribe({
      next: (data: Laptops[]) => this.laptopsArray = data,
      error: err => console.error("Error fetching laptops:", err)
    });
  }

  editLaptop(): void {
    this.router.navigate(['/modify-list-item']);
  }

  deleteLaptop(lap: Laptops): void {
    const id = lap.serialNumber;
    this.laptopsService.deleteLaptop(id).subscribe({
      next: () => {
        this.laptopsArray = this.laptopsArray.filter(laptop => laptop.serialNumber !== id);
      },
      error: err => console.error("Error deleting laptop:", err)
    });
  }
}
