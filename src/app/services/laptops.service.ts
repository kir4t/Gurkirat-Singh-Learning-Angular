import { Injectable } from '@angular/core';
import {laptopsArray} from "../Shared/mockLaptops";
import {Laptops} from "../Shared/Models/Laptops";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  private laptops: Laptops[]= laptopsArray;

  constructor() { }
  getLaptops():Observable<Laptops[]>{
    return of (this.laptops);

  }
  addLaptop(newLaptop: Laptops): Observable<Laptops[]>{
    laptopsArray.push(newLaptop);
    return of(this.laptops);

  }
  updateLaptop(updatedLaptops:Laptops): Observable<Laptops[]> {
    const index = laptopsArray.findIndex(laptop => laptop.serialNumber === updatedLaptops.serialNumber);
    if (index !== -1) {
      laptopsArray[index] = updatedLaptops;
    }
    return of(this.laptops);
  }

  deleteLaptop(serialNumber:number): Observable<Laptops[]>{
    this.laptops = laptopsArray.filter(laptop=>laptop.serialNumber !== serialNumber);
    return of (this.laptops);
  }

  getLaptopBySerialNumber(serialNumber: number): Observable<Laptops | undefined>{
    const laptop = laptopsArray.find(laptop=>laptop.serialNumber === serialNumber);
    return of(laptop);
  }

  generateNewId(): number{
    return this.laptops.length> 0? Math.max(...this.laptops.map(l => l.serialNumber)) + 1: 1;
  }
}
