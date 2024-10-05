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
    return of (laptopsArray);

  }

}
