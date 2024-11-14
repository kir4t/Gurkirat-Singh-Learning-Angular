import { Laptops } from "./Models/Laptops";

export const laptopsArray: Laptops[] = [
  { serialNumber: 1111, brand: "Apple", model: "mac pro", storage: 256, isAvailable: true, image:"/assets/apple1.jpg", price: 1999, purchaseDate: '2023-06-01T00:00:00Z' },
  { serialNumber: 2222, brand: "Hp", model: "Pavilion", storage: 512, isAvailable: true, image:"/assets/hp.jpg", price: 899, purchaseDate: '2022-05-15T00:00:00Z' },
  { serialNumber: 3333, brand: "Think Pad", model: "X1 carbon", storage: 256, isAvailable: true, image:"/assets/thinkpad.jpeg", price: 1499, purchaseDate: '2023-01-10T00:00:00Z' },
  { serialNumber: 4444, brand: "Lenovo", model: "G2 max", storage: 256, isAvailable: false, image:"/assets/lenovo.jpg", price: 750, purchaseDate: '2021-11-03T00:00:00Z' },
  { serialNumber: 5555, brand: "Asus", model: "book 15", storage: 512, isAvailable: false, image:"/assets/asus.jpg", price: 600, purchaseDate: '2022-08-20T00:00:00Z' },
  { serialNumber: 6666, brand: "Apple", model: "mac pro max", storage: 512, isAvailable: false, image:"/assets/apple2.jpg", price: 2500, purchaseDate: '2023-04-22T00:00:00Z' }
];
