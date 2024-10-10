import {Laptops} from "./Models/Laptops";
export const laptopsArray: Laptops[] = [
  { serialNumber: "1111A", brand: "Apple", model: "mac pro", storage: 256, isAvailable: true, image:"/assets/apple1.jpg" },
  { serialNumber: "2222B", brand: "Hp", model: "Pavilion", storage: 512, isAvailable: true, image:"/assets/hp.jpg"},
  { serialNumber: "3333C", brand: "Think Pad", model: "X1 carbon", storage: 256, isAvailable: true, image:"/assets/thinkpad.jpeg" },
  { serialNumber: "4444D", brand: "Lenovo", model: "G2 max", storage: 256, isAvailable: false , image:"/assets/lenovo.jpg"},
  { serialNumber: "5555E", brand: "Asus", model: "book 15", storage: 512, isAvailable: false , image:"/assets/asus.jpg"},
  { serialNumber: "6666F", brand: "Apple", model: "mac pro max", storage: 512, isAvailable: false, image:"/assets/apple2.jpg" }
];
