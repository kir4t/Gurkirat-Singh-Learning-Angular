import {InMemoryDbService} from "angular-in-memory-web-api";
import {Laptops} from "../Shared/Models/Laptops";
import {Observable} from "rxjs";

export class InMemoryDataService implements InMemoryDbService{

  createDb(): {laptopsArray: Laptops[]}{
    const laptopsArray: Laptops[] = [
      { serialNumber: 1111, brand: "Apple", model: "mac pro", storage: 256, isAvailable: true, image:"/assets/apple1.jpg" },
      { serialNumber: 2222, brand: "Hp", model: "Pavilion", storage: 512, isAvailable: true, image:"/assets/hp.jpg"},
      { serialNumber: 3333, brand: "Think Pad", model: "X1 carbon", storage: 256, isAvailable: true, image:"/assets/thinkpad.jpeg" },
      { serialNumber: 4444, brand: "Lenovo", model: "G2 max", storage: 256, isAvailable: false , image:"/assets/lenovo.jpg"},
      { serialNumber: 5555, brand: "Asus", model: "book 15", storage: 512, isAvailable: false , image:"/assets/asus.jpg"},
      { serialNumber: 6666, brand: "Apple", model: "mac pro max", storage: 512, isAvailable: false, image:"/assets/apple2.jpg" }
    ];
    return {laptopsArray};
  }

}
