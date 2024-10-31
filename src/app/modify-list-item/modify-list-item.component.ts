import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent {
  laptopForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.laptopForm = this.fb.group({
      serialNumber: ['', Validators.required],
      brand: ['', Validators.required],
      storage: ['', Validators.required],
      isAvailable: [false]
    });
  }



  onSubmit(): void {
    if (this.laptopForm.valid) {
      console.log(this.laptopForm.value);
    }
  }
}
