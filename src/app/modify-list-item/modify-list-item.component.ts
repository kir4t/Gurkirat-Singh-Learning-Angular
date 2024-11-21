import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LaptopsService} from "../services/laptops.service";
import {laptopsArray} from "../Shared/mockLaptops";
import {Laptops} from "../Shared/Models/Laptops";
import {HighlightOnFocusDirective} from "../highlight-on-focus.directive";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.scss'
})
export class ModifyListItemComponent implements OnInit{
  laptopForm: FormGroup;
  newLaptop: Laptops | undefined;

  constructor(private fb: FormBuilder,
              private router : Router,
              private laptopService: LaptopsService,
              private route: ActivatedRoute) {
    this.laptopForm = this.fb.group({
      serialNumber: ['', Validators.required],
      brand: ['', Validators.required],
      storage: ['', Validators.required],
      isAvailable: [false]
    });
  }

  ngOnInit(): void {
    const serialNumber = this.route.snapshot.paramMap.get('SerialNumber');
    if (serialNumber){
      this.laptopService.getLaptopBySerialNumber(+serialNumber).subscribe(laptopsArray =>{
        if (laptopsArray){
          this.newLaptop = laptopsArray as Laptops;

          this.laptopForm.patchValue(laptopsArray);
        }
      })
    }

  }


  onSubmit(): void {
    if (this.laptopForm.valid) {
      const laptop: Laptops = this.laptopForm.value;
      if (laptop.serialNumber){
        this.laptopService.updateLaptop(laptop).subscribe(()=> this.router.navigate(['/laptops']));

      }else {
        laptop.serialNumber = this.laptopService.generateNewId();
        this.laptopService.addLaptop(laptop).subscribe(() => this.router.navigate(['/laptops']))
      }
    }
  }

  onAdd(): void{
    const lap: Laptops = this.laptopForm.value;
    const newId = this.laptopService.generateNewId();
    lap.serialNumber= newId;
    this.laptopService.addLaptop(lap).subscribe(()=>{
      this.router.navigate(['/laptops']);
    });
  }
  onUpdate(): void{
    const lap: Laptops = this.laptopForm.value;
    this.laptopService.updateLaptop(lap).subscribe(()=>{
      this.router.navigate(['/laptops']);
    });
  }

  navigateToLaptopList(): void{
    this.router.navigate(['/laptops'])
  }
}
