import { Injectable } from '@angular/core';
import {laptopsArray} from "../Shared/mockLaptops";
import {Laptops} from "../Shared/Models/Laptops";
import {catchError, Observable, of, throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class LaptopsService {
  private apiUrl = 'api/laptops';
  private laptops: Laptops[]= laptopsArray;


  constructor(private http: HttpClient) { }
  getLaptops():Observable<Laptops[]>{
    return this.http.get<Laptops[]>(this.apiUrl).pipe(catchError(this.handleError));

  }
  addLaptop(newLaptop: Laptops): Observable<{}>{
    laptopsArray.push(newLaptop);
    return this.http.post<Laptops>(this.apiUrl, newLaptop).pipe(catchError(this.handleError));

  }
  updateLaptop(updatedLaptops:Laptops): Observable<{}> {
    const url = laptopsArray.findIndex(laptop => laptop.serialNumber === updatedLaptops.serialNumber);
    return this.http.post<Laptops>(this.apiUrl, updatedLaptops).pipe(catchError(this.handleError));
    }

  deleteLaptop(serialNumber:number): Observable<{}>{
    const url = `${this.apiUrl}/${serialNumber}`
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  getLaptopBySerialNumber(serialNumber: number): Observable<Laptops | undefined>{
    return this.http.get<Laptops>(`${this.apiUrl}/${serialNumber}`).pipe(catchError(this.handleError));

  }

  generateNewId(): number{
    return this.laptops.length> 0? Math.max(...this.laptops.map(l => l.serialNumber)) + 1: 1;
  }


  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}



