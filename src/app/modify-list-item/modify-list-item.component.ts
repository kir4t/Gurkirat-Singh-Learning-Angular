import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit{
  laptopForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.laptopForm=this.fb.group({
      serialNumber:['', Validators.required],
      brand:['', Validators.required],
      storage:['', Validators.required],
      isAvailable:[false]
    });
  }
ngOnInit(): void{
}
}
