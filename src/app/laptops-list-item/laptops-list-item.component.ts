import {Component, Input} from '@angular/core';
import {Laptops} from "../Shared/Models/Laptops";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-laptops-list-item',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './laptops-list-item.component.html',
  styleUrl: './laptops-list-item.component.scss'
})
export class LaptopsListItemComponent {

  @Input() laptop!: Laptops;

}
