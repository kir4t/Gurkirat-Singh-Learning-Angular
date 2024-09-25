import {Component, Input} from '@angular/core';
import {Laptops} from "../Shared/Models/Laptops";

@Component({
  selector: 'app-laptops-list-item',
  standalone: true,
  imports: [],
  templateUrl: './laptops-list-item.component.html',
  styleUrl: './laptops-list-item.component.css'
})
export class LaptopsListItemComponent {

  @Input() isAvailable?: Laptops;

}
